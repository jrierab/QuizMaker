import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerButton } from 'src/app/models/answer-button.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() question!: string;
  @Input() choices!: Array<string>;
  @Input() answer!: string;
  @Input() correctAnswer!: string;
  @Input() showSolution!: boolean;
  @Output() isAnswered = new EventEmitter<string>();

  answerList : Array<AnswerButton> = [];

  ngOnInit() {
    // Calcs correct answer position in choices
    const answerPos = this.choices.findIndex((option)=> option===this.answer);
    // Initialization of buttons status
    this.answerList = this.choices.map((option: string, pos: number) => ({
        label: option, isCorrect: option===this.correctAnswer, isSelected: pos===answerPos
      }
    ));
  }

  /**
   * We de-select others (previous answer, if any) and select current answer
   *
   * @param {number} pos
   * @memberof QuestionCardComponent
   */
  onAnswerSelected(pos: number) {
    this.answerList.forEach((answer, i) => answer.isSelected = (i===pos));
    this.isAnswered.emit(this.choices[pos]);
  }
}
