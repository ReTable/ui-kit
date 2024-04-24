import { isTreeBranch } from './isTreeBranch';
import { Tree, TreeBranch, TreeLeaf, TreeNode } from './types';

// region Types

export type TraverseAlgorithm = 'depth-first' | 'breadth-first';

export type LeafTraverseItem<Leaf extends TreeLeaf> = {
  node: Leaf;

  isBranch: false;
  isLeaf: true;

  level: number;

  parentId?: Leaf['id'];
  parentIds: Set<Leaf['id']>;
};

export type BranchTraverseItem<Leaf extends TreeLeaf> = {
  node: TreeBranch<Leaf>;

  isBranch: true;
  isLeaf: false;

  level: number;

  parentId?: Leaf['id'];
  parentIds: Set<Leaf['id']>;
};

export type TraverseItem<Leaf extends TreeLeaf> = LeafTraverseItem<Leaf> | BranchTraverseItem<Leaf>;

export type TraverseFilter<Leaf extends TreeLeaf> = (item: TraverseItem<Leaf>) => boolean;

export type TraverseOptions<Leaf extends TreeLeaf> = {
  filter?: TraverseFilter<Leaf>;
  subTree?: Leaf['id'];
};

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
  { filter, subTree }: TraverseOptions<Leaf> = {},
): Generator<TraverseItem<Leaf>> {
  let queue = tree.map((node) => toQueueItem(node));

  let cursor = 0;

  // NOTE: By default we think we're in the subtree already.
  let isInsideSubtree = subTree == null;

  while (cursor < queue.length) {
    const item = queue[cursor];

    // NOTE: If we're outside subtree and found the target subtree, then form a new queue from
    //       the founded subtree.
    if (!isInsideSubtree && item.node.id === subTree) {
      isInsideSubtree = true;

      queue = [item];

      cursor = 0;

      continue;
    }

    cursor += 1;

    // NOTE: If we're inside the target subtree, then apply a filter and yield item if it's
    //       satisfy a filter condition.
    if (isInsideSubtree) {
      const isSatisfy = filter?.(item) ?? true;

      if (!isSatisfy) {
        continue;
      }

      yield item;
    }

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
