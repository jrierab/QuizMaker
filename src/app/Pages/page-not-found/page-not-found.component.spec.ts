import { PageNotFoundComponent } from './page-not-found.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';

describe('PageNotFoundComponent', () => {
  beforeEach(() => {
    return MockBuilder(PageNotFoundComponent, AppModule);
  });

  it('asserts creation of PageNotFoundComponent', () => {
    const fixture = MockRender(PageNotFoundComponent);
    expect(fixture).toBeDefined();
  });
});
