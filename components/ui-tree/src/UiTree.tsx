import { ReactElement, ReactNode, useMemo } from 'react';

import { isBranch, walkTree } from './helpers';
import { BranchComponentType, LeafComponentType, Tree } from './types';
import { useExpanded } from './useExpanded';

export type Props<Data, Id> = {
  className?: string;

  tree: Tree<Data, Id>;

  leafComponent: LeafComponentType<Data, Id>;
  branchComponent: BranchComponentType<Data, Id>;
};

export function UiTree<Data, Id extends number | string = number | string>({
  className,
  tree,
  leafComponent: Leaf,
  branchComponent: Branch,
}: Props<Data, Id>): ReactElement {
  const [expanded, onToggle] = useExpanded(tree);

  const items = useMemo(() => {
    const children: ReactNode[] = [];

    const skipBranch = (id: Id) => !expanded.has(id);

    for (const [item, level] of walkTree(tree, skipBranch)) {
      const { id, data } = item;

      if (!isBranch(item)) {
        children.push(<Leaf data={data} id={id} key={id} level={level} />);
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

    return children;
  }, [tree, expanded, Branch, Leaf, onToggle]);

  return <div className={className}>{items}</div>;
}
