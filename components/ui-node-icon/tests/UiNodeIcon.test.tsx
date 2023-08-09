import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { UiInnerJoinLIcon, UiInnerJoinMIcon } from '~';

describe('UiNodeMIcon', () => {
  it('renders a basic icon', () => {
    const tree = create(<UiInnerJoinMIcon />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a disabled icon if property is provided', () => {
    const tree = create(<UiInnerJoinMIcon isDisabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('UiNodeLIcon', () => {
  it('renders a basic icon', () => {
    const tree = create(<UiInnerJoinLIcon />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a disabled icon if property is provided', () => {
    const tree = create(<UiInnerJoinLIcon isDisabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
