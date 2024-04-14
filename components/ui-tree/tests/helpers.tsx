import { fireEvent, render, screen } from '@testing-library/react';

import { Tree, TreeBranch, TreeNode, UiTree } from '~';

import { Branch as BranchComponent } from './Branch';
import { Leaf as LeafComponent } from './Leaf';
import { Leaf } from './pipeline';

// region Factory

export function leafOf(id: number): Leaf {
  return {
    id,

    name: `Leaf ${id}`,
  };
}

export function branchOf(id: number, children: Array<TreeNode<Leaf>> = []): TreeBranch<Leaf> {
  return {
    id,

    name: `Branch ${id}`,

    children,
  };
}

// endregion Counter

// region Render

type RenderTreeResult = {
  toggle: (id: number) => void;
};

export function renderTree(tree: Tree<Leaf>): RenderTreeResult {
  render(<UiTree branch={BranchComponent} leaf={LeafComponent} testId="tree" tree={tree} />);

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
