import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerButtonComponent } from './answer-button.component';

describe('AnswerButtonComponent', () => {
  let component: AnswerButtonComponent;
  let fixture: ComponentFixture<AnswerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerButtonComponent]
    });
    fixture = TestBed.createComponent(AnswerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
