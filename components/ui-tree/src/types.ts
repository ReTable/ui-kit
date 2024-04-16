import { ComponentType } from 'react';

import { TreeLeaf } from '@tabula/tree-utils';

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
