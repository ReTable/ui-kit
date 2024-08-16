import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiSwitch } from '~';

describe('UiSwitch', () => {
  it('works', () => {
    const tree = create(<UiSwitch />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
