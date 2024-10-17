import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiMultiSelector } from '~';

describe('UiMultiSelector', () => {
  it('works', () => {
    const tree = create(<UiMultiSelector />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
