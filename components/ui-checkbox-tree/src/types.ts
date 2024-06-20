import {
  Tree as BaseTree,
  TreeBranch as BaseTreeBranch,
  TreeLeaf as BaseTreeLeaf,
  TreeNode as BaseTreeNode,
} from '@tabula/ui-tree';

export type CheckboxState = {
  hasDisabled: boolean;
  isChecked: boolean;
  isDisabled: boolean;
  isEmpty: boolean;
  isIndeterminate: boolean;
};

export type TreeLeaf = BaseTreeLeaf & { isDisabled?: boolean };

export type TreeBranch<Leaf extends TreeLeaf> = BaseTreeBranch<Leaf>;

export type TreeNode<Leaf extends TreeLeaf> = BaseTreeNode<Leaf>;

export type Tree<Leaf extends TreeLeaf> = BaseTree<Leaf>;

export type Selected<Leaf extends TreeLeaf> = Set<Leaf['id']>;

export type ChangeHandler<Leaf extends TreeLeaf> = (ids: Selected<Leaf>) => void;
