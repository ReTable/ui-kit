import { TreeLeaf, TreeNode } from './types';

export function isTreeLeaf<Leaf extends TreeLeaf>(node: TreeNode<Leaf>): node is Leaf {
  return !('children' in node);
}
