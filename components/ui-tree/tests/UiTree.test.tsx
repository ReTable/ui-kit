import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiTree } from '~';

describe('UiTree', () => {
  it('works', () => {
    const tree = create(<UiTree />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
