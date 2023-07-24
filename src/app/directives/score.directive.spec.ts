import { ScoreDirective } from './score.directive';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('ScoreDirective', () => {
  beforeEach(() => MockBuilder(ScoreDirective));

  it('low score', () => {
    const fixture = MockRender('<div [appScore]="1"></div>');

    expect(fixture.nativeElement.innerHTML).toContain(
      'style="background-color: red;"',
    );
  });

  it('medium score', () => {
    const fixture = MockRender('<div [appScore]="3"></div>');

    expect(fixture.nativeElement.innerHTML).toContain(
      'style="background-color: yellow;"',
    );
  });

  it('high score', () => {
    const fixture = MockRender('<div [appScore]="4"></div>');

    expect(fixture.nativeElement.innerHTML).toContain(
      'style="background-color: green;"',
    );
  });
});
