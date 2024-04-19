import { ComponentType } from 'react';

import { BranchTraverseItem, LeafTraverseItem, TreeLeaf, TreeNode } from '@tabula/tree-utils';

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

  /**
   * Item's test id provided by parent.
   */
  testId?: string;
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

  /**
   * Item's test id provided by parent.
   */
  testId?: string;
};

export type LeafComponentType<Leaf extends TreeLeaf> = ComponentType<LeafComponentProps<Leaf>>;

export type BranchComponentType<Leaf extends TreeLeaf> = ComponentType<BranchComponentProps<Leaf>>;

// endregion Components

// region Filters

export type Match<Leaf extends TreeLeaf> = (node: TreeNode<Leaf>, search: string) => boolean;

// endregion Filters

// region Ids

export type Id<Leaf extends TreeLeaf> = Leaf['id'];

export type Ids<Leaf extends TreeLeaf> = Set<Id<Leaf>>;

// endregion Ids

// region Render

export type InternalMatch<Leaf extends TreeLeaf> = (node: TreeNode<Leaf>) => boolean;

type LeafRenderItem<Leaf extends TreeLeaf> = LeafTraverseItem<Leaf>;

type BranchRenderItem<Leaf extends TreeLeaf> = BranchTraverseItem<Leaf> & {
  isExpanded: boolean;

  onToggle: () => void;
};

export type RenderItem<Leaf extends TreeLeaf> = LeafRenderItem<Leaf> | BranchRenderItem<Leaf>;

export type RenderPipeline<Leaf extends TreeLeaf> = Iterable<RenderItem<Leaf>>;

// endregion Render
