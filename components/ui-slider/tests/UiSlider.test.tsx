import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiSlider } from '~';

describe('UiSlider', () => {
  it('works', () => {
    const tree = create(<UiSlider />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
