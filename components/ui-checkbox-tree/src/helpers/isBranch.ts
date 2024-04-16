import { TreeBranch, TreeLeaf, TreeNode } from '@tabula/ui-tree';

export function isBranch<Leaf extends TreeLeaf>(node: TreeNode<Leaf>): node is TreeBranch<Leaf> {
  return 'children' in node;
}
