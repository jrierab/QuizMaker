import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerButton } from 'src/app/models/answer-button.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() question!: string;
  @Input() answer!: string;
  @Input() others!: Array<string>;
  @Input() showSolution!: boolean;
  @Output() isAnswered = new EventEmitter<void>();

  answerList : Array<AnswerButton> = [];

  ngOnInit() {
    this.answerList = [this.answer, ...this.others].sort(() => Math.random() - 0.5).map((sAnswer: string) => ({
        answer: sAnswer, isCorrect: sAnswer===this.answer, isSelected: false
      }
    ));
  }

  onAnswerSelected(pos: number) {
    this.answerList.forEach((answer, i) => answer.isSelected = (i===pos));
    this.isAnswered.emit();
  }
}
