import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiStatusBadge } from '~';

describe('UiStatusBadge', () => {
  it('works', () => {
    const tree = create(<UiStatusBadge />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
