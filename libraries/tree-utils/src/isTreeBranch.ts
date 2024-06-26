import { TreeBranch, TreeLeaf, TreeNode } from './types';

export function isTreeBranch<Leaf extends TreeLeaf>(
  node: TreeNode<Leaf>,
): node is TreeBranch<Leaf> {
  return 'children' in node;
}
