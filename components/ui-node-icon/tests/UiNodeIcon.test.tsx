import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiNodeIcon } from '~';

describe('UiNodeIcon', () => {
  it('works', () => {
    const tree = create(<UiNodeIcon />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
