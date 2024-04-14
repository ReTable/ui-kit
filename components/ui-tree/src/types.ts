import { ComponentType } from 'react';

// region Tree

export type TreeLeaf = {
  [key: string]: unknown;

  id: number | string;
};

export type TreeBranch<Leaf extends TreeLeaf> = Leaf & {
  children: Array<Leaf | TreeBranch<Leaf>>;
};

export type TreeNode<Leaf extends TreeLeaf> = Leaf | TreeBranch<Leaf>;

export type Tree<Leaf extends TreeLeaf> = Array<TreeNode<Leaf>>;

// endregion Tree

// region Components

export type LeafComponentProps<Leaf extends TreeLeaf> = {
  /**
   * Tree's node.
   */
  node: Leaf;

  /**
   * Item's nesting level.
   */
  level: number;
};

export type BranchComponentProps<Leaf extends TreeLeaf> = {
  /**
   * Tree's node.
   */
  node: Leaf;

  /**
   * Item's nesting level.
   */
  level: number;
  /**
   * Is branch expanded?
   */
  isExpanded: boolean;

  /**
   * Handler to expand/collapse the current branch.
   */
  onToggle: () => void;
};

export type LeafComponentType<Leaf extends TreeLeaf> = ComponentType<LeafComponentProps<Leaf>>;

export type BranchComponentType<Leaf extends TreeLeaf> = ComponentType<BranchComponentProps<Leaf>>;

// endregion Components
