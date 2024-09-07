import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiSelector } from '~';

describe('UiSelector', () => {
  it('works', () => {
    const tree = create(<UiSelector />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
