import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiMenu } from '~';

describe('UiMenu', () => {
  it('works', () => {
    const tree = create(<UiMenu />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
