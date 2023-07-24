import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appScore]'
})
export class ScoreDirective implements OnChanges {
  @Input() appScore = 0;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const color = (this.appScore <=1 ? 'red' : (this.appScore <=3 ? 'yellow' : 'green'));
    this.el.nativeElement.style.backgroundColor = color;
  }
}
