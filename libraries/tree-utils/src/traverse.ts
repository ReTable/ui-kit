import { isTreeBranch } from './isTreeBranch';
import { Tree, TreeBranch, TreeLeaf, TreeNode } from './types';

// region Types

export type TraverseAlgorithm = 'depth-first' | 'breadth-first';

type LeafTraverseItem<Leaf extends TreeLeaf> = {
  node: Leaf;

  isBranch: false;
  isLeaf: true;

  level: number;

  parentId?: Leaf['id'];
  parentIds: Set<Leaf['id']>;
};

type BranchTraverseItem<Leaf extends TreeLeaf> = {
  node: TreeBranch<Leaf>;

  isBranch: true;
  isLeaf: false;

  level: number;

  parentId?: Leaf['id'];
  parentIds: Set<Leaf['id']>;
};

export type TraverseItem<Leaf extends TreeLeaf> = LeafTraverseItem<Leaf> | BranchTraverseItem<Leaf>;

// endregion Types

// region Helpers

function appendParent<Leaf extends TreeLeaf>(
  parentIds: Set<Leaf['id']>,
  parentId: Leaf['id'],
): Set<Leaf['id']> {
  const nextParentIds = new Set(parentIds);

  nextParentIds.add(parentId);

  return nextParentIds;
}

function toQueueItem<Leaf extends TreeLeaf>(
  node: TreeNode<Leaf>,
  parent?: BranchTraverseItem<Leaf>,
): TraverseItem<Leaf> {
  const [level, parentId, parentIds] =
    parent == null
      ? [0, undefined, new Set<Leaf['id']>()]
      : [parent.level + 1, parent.node.id, appendParent(parent.parentIds, parent.node.id)];

  return isTreeBranch(node)
    ? {
        node,

        isBranch: true,
        isLeaf: false,

        level,

        parentId,
        parentIds,
      }
    : {
        node,

        isBranch: false,
        isLeaf: true,

        level,

        parentId,
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
