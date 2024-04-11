import { ReactElement, ReactNode } from 'react';

import { isBranch, walkTree } from './helpers';
import { BranchComponentType, LeafComponentType, Tree } from './types';
import { useExpanded } from './useExpanded';

export type Props<Id, Data> = {
  className?: string;

  tree: Tree<Id, Data>;

  leafComponent: LeafComponentType<Id, Data>;
  branchComponent: BranchComponentType<Id, Data>;

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
