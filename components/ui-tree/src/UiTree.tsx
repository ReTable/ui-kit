import { ReactElement, ReactNode } from 'react';

import { TraverseFilter, Tree, TreeLeaf, depth } from '@tabula/tree-utils';

import { BranchComponentType, LeafComponentType } from './types';
import { useExpanded } from './useExpanded';

export type Props<Leaf extends TreeLeaf> = {
  /**
   * Optional CSS class for root element.
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
   * Optional attribute for test purposes.
   */
  testId?: string;
};

export function UiTree<Leaf extends TreeLeaf>({
  className,
  tree,
  leaf: LeafRenderer,
  branch: BranchRenderer,
  testId,
}: Props<Leaf>): ReactElement {
  const [expanded, onToggle] = useExpanded(tree);

  const children: ReactNode[] = [];

  const filter: TraverseFilter<Leaf> = ({ parentId }) => {
    if (parentId == null) {
      return true;
    }

    return expanded.has(parentId);
  };

  for (const { isBranch, node, level } of depth(tree, filter)) {
    if (!isBranch) {
      children.push(<LeafRenderer key={node.id} level={level} node={node} />);

      continue;
    }

    const isExpanded = expanded.has(node.id);

    const handleToggle = () => {
      onToggle(node.id);
    };

    children.push(
      <BranchRenderer
        isExpanded={isExpanded}
        key={node.id}
        level={level}
        node={node}
        onToggle={handleToggle}
      />,
    );
  }

  return (
    <div className={className} data-testid={testId}>
      {children}
    </div>
  );
}

if (import.meta.env.DEV) {
  UiTree.displayName = 'ui-tree(UiTree)';
}
