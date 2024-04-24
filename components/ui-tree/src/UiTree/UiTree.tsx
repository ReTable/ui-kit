import { ReactNode } from 'react';

import { Tree, TreeLeaf } from '@tabula/tree-utils';

import { Items } from '../Items';
import { usePipeline } from '../hooks';
import { BranchComponentType, LeafComponentType, Match } from '../types';

export type Props<Leaf extends TreeLeaf> = {
  /**
   * User defined CSS class which be assigned to the root element.
   */
  className?: string;

  /**
   * Tree of elements to render.
   */
  tree: Tree<Leaf>;

  /**
   * Component to render leaf item.
   */
  leaf: LeafComponentType<Leaf>;
  /**
   * Component to render branch item.
   */
  branch: BranchComponentType<Leaf>;

  /**
   * Match predicate which returns `true` if leaf matches with search value.
   */
  match?: Match<Leaf>;

  /**
   * Pattern to search nodes.
   */
  pattern?: string;

  /**
   * Optional attribute for test purposes.
   */
  testId?: string;
};

export function UiTree<Leaf extends TreeLeaf>({
  branch,
  className,
  leaf,
  match,
  pattern,
  testId,
  tree,
}: Props<Leaf>): ReactNode {
  const pipeline = usePipeline({ match, pattern, tree });

  return (
    <div className={className} data-testid={testId}>
      <Items branch={branch} leaf={leaf} pipeline={pipeline} testId={testId} />
    </div>
  );
}

if (import.meta.env.DEV) {
  UiTree.displayName = 'ui-tree(UiTree)';
}
