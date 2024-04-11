import { ReactElement, ReactNode } from 'react';

import { isBranch, walkTree } from './helpers';
import { BranchComponentType, LeafComponentType, Tree } from './types';
import { useExpanded } from './useExpanded';

export type Props<Id, Data> = {
  /**
   * Optional CSS class for root element.
   */
  className?: string;

  /**
   * Tree of elements to render.
   */
  tree: Tree<Id, Data>;

  /**
   * Component to render leaf item.
   */
  leafComponent: LeafComponentType<Id, Data>;
  /**
   * Component to render branch item.
   */
  branchComponent: BranchComponentType<Id, Data>;

  /**
   * Optional attribute for test purposes.
   */
  testId?: string;
};

export function UiTree<Id extends number | string, Data>({
  className,
  tree,
  leafComponent: Leaf,
  branchComponent: Branch,
  testId,
}: Props<Id, Data>): ReactElement {
  const [expanded, onToggle] = useExpanded(tree);

  const children: ReactNode[] = [];

  for (const { item, level } of walkTree(tree, (id) => !expanded.has(id))) {
    const { id, data } = item;

    if (!isBranch(item)) {
      children.push(<Leaf data={data} id={id} key={id} level={level} />);

      continue;
    }

    const isExpanded = expanded.has(id);

    const handleToggle = () => {
      onToggle(item.id);
    };

    children.push(
      <Branch
        data={data}
        id={id}
        isExpanded={isExpanded}
        key={id}
        level={level}
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
