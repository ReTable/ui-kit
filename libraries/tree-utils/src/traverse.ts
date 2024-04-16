import { isTreeBranch } from './isTreeBranch';
import { Tree, TreeBranch, TreeLeaf, TreeNode } from './types';

// region Types

export type TraverseAlgorithm = 'depth-first' | 'breadth-first';

type LeafTraverseItem<Leaf extends TreeLeaf> = {
  node: Leaf;

  isBranch: false;
  isLeaf: true;

  level: number;

  parentIds: Array<Leaf['id']>;
};

type BranchTraverseItem<Leaf extends TreeLeaf> = {
  node: TreeBranch<Leaf>;

  isBranch: true;
  isLeaf: false;

  level: number;

  parentIds: Array<Leaf['id']>;
};

export type TraverseItem<Leaf extends TreeLeaf> = LeafTraverseItem<Leaf> | BranchTraverseItem<Leaf>;

// endregion Types

// region Helpers

function toQueueItem<Leaf extends TreeLeaf>(
  node: TreeNode<Leaf>,
  parent?: BranchTraverseItem<Leaf>,
): TraverseItem<Leaf> {
  const [level, parentIds] =
    parent == null ? [0, []] : [parent.level + 1, [...parent.parentIds, parent.node.id]];

  return isTreeBranch(node)
    ? {
        node,

        isBranch: true,
        isLeaf: false,

        level,

        parentIds,
      }
    : {
        node,

        isBranch: false,
        isLeaf: true,

        level,
        parentIds,
      };
}

// endregion Helpers

export function* traverse<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  algorithm: TraverseAlgorithm,
): Generator<TraverseItem<Leaf>> {
  const queue = tree.map((node) => toQueueItem(node));

  let cursor = 0;

  while (cursor < queue.length) {
    const item = queue[cursor];

    yield item;

    cursor += 1;

    if (item.isLeaf) {
      continue;
    }

    const children = item.node.children.map((node) => toQueueItem(node, item));

    if (algorithm === 'depth-first') {
      queue.splice(cursor, 0, ...children);
    } else {
      queue.push(...children);
    }
  }
}
