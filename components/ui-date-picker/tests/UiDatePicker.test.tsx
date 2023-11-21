import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiDatePicker } from '~';

describe('UiDatePicker', () => {
  it('works', () => {
    const tree = create(<UiDatePicker />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
