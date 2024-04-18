import { TraverseItem, Tree, TreeLeaf, breadth } from '@tabula/tree-utils';

import { Id } from './types';

function filter<Leaf extends TreeLeaf>({ isBranch }: TraverseItem<Leaf>): boolean {
  return isBranch;
}

export function branchesOf<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  subTree?: Id<Leaf>,
): Generator<TraverseItem<Leaf>> {
  return breadth(tree, { filter, subTree });
}
