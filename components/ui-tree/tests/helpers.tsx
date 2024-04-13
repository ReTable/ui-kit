import { fireEvent, render, screen } from '@testing-library/react';

import { Branch, Item, Leaf, Tree, UiTree } from '~';

import { Branch as BranchComponent } from './Branch';
import { Leaf as LeafComponent } from './Leaf';
import { Data } from './pipeline';

// region Factory

export function leafOf(id: number): Leaf<number, Data> {
  return {
    id,

    data: {
      name: `Leaf ${id}`,
    },
  };
}

export function branchOf(
  id: number,
  children: Array<Item<number, Data>> = [],
): Branch<number, Data> {
  return {
    id,

    data: {
      name: `Branch ${id}`,
    },

    children,
  };
}

// endregion Counter

// region Render

type RenderTreeResult = {
  toggle: (id: number) => void;
};

export function renderTree(tree: Tree<number, Data>): RenderTreeResult {
  render(
    <UiTree
      tree={tree}
      leafComponent={LeafComponent}
      branchComponent={BranchComponent}
      testId="tree"
    />,
  );

  return {
    toggle(id) {
      const button = screen.queryByTestId(`branch-${id}-toggle`);

      if (button == null) {
        throw new Error(`Couldn't find a toggle button for branch with id ${id}`);
      }

      fireEvent.click(button);
    },
  };
}

// endregion Render
