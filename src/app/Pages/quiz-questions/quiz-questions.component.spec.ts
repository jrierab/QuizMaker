import { QuizQuestionsComponent } from './quiz-questions.component';
import { AppModule } from 'src/app/app.module';
import { OpenTriviaDbService } from 'src/app/services/open-trivia-db.service';
import { of } from 'rxjs';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ActivatedRoute } from '@angular/router';

describe('QuizQuestionsComponent', () => {
  beforeEach(() => {
    return MockBuilder(QuizQuestionsComponent, AppModule)
            .mock(OpenTriviaDbService, {getTriviaQuestion: () => of([])} as unknown as OpenTriviaDbService)
            .mock(ActivatedRoute, {snapshot: {queryParams: {}, data: {}}} as unknown as ActivatedRoute);
  });

  it('asserts creation of QuizQuestionsComponent', () => {
    const fixture = MockRender(QuizQuestionsComponent);
    expect(fixture).toBeDefined();
  });
});
