import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiButton } from '~';

describe('UiButton', () => {
  it('works', () => {
    const tree = create(<UiButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
