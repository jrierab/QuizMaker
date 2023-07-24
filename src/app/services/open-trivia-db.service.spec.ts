import { HttpClient } from '@angular/common/http';
import { OpenTriviaDbService } from './open-trivia-db.service';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('OpenTriviaDbService', () => {
  beforeEach(() => {
    return MockBuilder(OpenTriviaDbService, HttpClient);
  });

  it('asserts creation of OpenTriviaDbService', () => {
    // Creates an instance only if all dependencies are present.
    const service = MockRender(OpenTriviaDbService).point.componentInstance;

    expect((service as any).openTriviaDbUrl).toEqual('https://opentdb.com');
  });
});
