import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiCheckboxTree } from '~';

describe('UiCheckboxTree', () => {
  it('works', () => {
    const tree = create(<UiCheckboxTree />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
