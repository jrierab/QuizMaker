import { AppModule } from 'src/app/app.module';
import { QuizCreateComponent } from './quiz-create.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { OpenTriviaDbService } from 'src/app/services/open-trivia-db.service';
import { of } from 'rxjs';

describe('QuizCreateComponent', () => {
  beforeEach(() => {
    return MockBuilder(QuizCreateComponent, AppModule).mock(OpenTriviaDbService, {getTriviaCategories: () => of([])} as unknown as OpenTriviaDbService);
  });

  it('asserts creation of QuizCreateComponent', () => {
    const fixture = MockRender(QuizCreateComponent);
    expect(fixture).toBeDefined();
  });
});
