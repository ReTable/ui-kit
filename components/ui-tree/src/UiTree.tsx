import { ReactElement, ReactNode } from 'react';

import { isBranch, walkTree } from './helpers';
import { BranchComponentType, LeafComponentType, Tree, TreeLeaf } from './types';
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
  leafComponent: LeafComponentType<Leaf>;
  /**
   * Component to render branch item.
   */
  branchComponent: BranchComponentType<Leaf>;

  /**
   * Optional attribute for test purposes.
   */
  testId?: string;
};

export function UiTree<Leaf extends TreeLeaf>({
  className,
  tree,
  leafComponent: LeafComponent,
  branchComponent: BranchComponent,
  testId,
}: Props<Leaf>): ReactElement {
  const [expanded, onToggle] = useExpanded(tree);

  const children: ReactNode[] = [];

  for (const { item, level } of walkTree(tree, (id) => !expanded.has(id))) {
    if (!isBranch(item)) {
      children.push(<LeafComponent key={item.id} level={level} node={item} />);

      continue;
    }

    const isExpanded = expanded.has(item.id);

    const handleToggle = () => {
      onToggle(item.id);
    };

    children.push(
      <BranchComponent
        isExpanded={isExpanded}
        key={item.id}
        level={level}
        node={item}
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
