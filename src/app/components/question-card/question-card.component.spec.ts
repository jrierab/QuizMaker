import { QuestionCardComponent } from './question-card.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';

describe('QuestionCardComponent', () => {
  beforeEach(() => {
    return MockBuilder(QuestionCardComponent, AppModule);
  });

  it('asserts creation of QuestionCardComponent', () => {
    const fixture = MockRender(QuestionCardComponent, {
      choices: [],
    });
    expect(fixture).toBeDefined();
  });
});
