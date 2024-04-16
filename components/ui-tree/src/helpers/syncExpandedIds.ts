import { Tree, TreeLeaf, breadth } from '@tabula/tree-utils';

export function syncExpandedIds<Leaf extends TreeLeaf>(
  current: Set<Leaf['id']>,
  tree: Tree<Leaf>,
): Set<Leaf['id']> {
  const next = new Set<Leaf['id']>();

  for (const { isBranch, node } of breadth(tree)) {
    if (isBranch && current.has(node.id)) {
      next.add(node.id);
    }
  }

  // NOTE: If `current` and `next` are have the same size, we can say, they're the same.
  //
  //       In that case we can return original set, instead of a new one copy.
  return next.size === current.size ? current : next;
}
