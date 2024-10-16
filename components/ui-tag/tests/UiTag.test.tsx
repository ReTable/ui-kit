import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiTag } from '~';

describe('UiTag', () => {
  it('works', () => {
    const tree = create(<UiTag />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
