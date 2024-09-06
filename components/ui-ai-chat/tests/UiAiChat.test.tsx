import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiAiChat } from '~';

describe('UiAiChat', () => {
  it('works', () => {
    const tree = create(<UiAiChat />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
