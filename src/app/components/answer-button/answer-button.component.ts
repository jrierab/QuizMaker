import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.scss']
})
export class AnswerButtonComponent {
  @Input() answer! : string;
  @Input() isSelected! : boolean;
  @Input() isCorrect! : boolean;
  @Input() showSolution!: boolean;

  @Output() answerSelected : EventEmitter<void> = new EventEmitter();

  onAnswerClicked() {
    if(!this.showSolution) {
      this.answerSelected.emit();
    }
  }
}
