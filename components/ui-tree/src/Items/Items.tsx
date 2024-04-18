import { ReactNode } from 'react';

import { TreeLeaf } from '@tabula/tree-utils';

import { BranchComponentType, LeafComponentType, RenderPipeline } from '../types';

type Props<Leaf extends TreeLeaf> = {
  pipeline: RenderPipeline<Leaf>;

  branch: BranchComponentType<Leaf>;
  leaf: LeafComponentType<Leaf>;
};

export function Items<Leaf extends TreeLeaf>({
  branch: BranchRenderer,
  leaf: LeafRenderer,
  pipeline,
}: Props<Leaf>): ReactNode {
  const items: ReactNode[] = [];

  for (const item of pipeline) {
    if (item.isLeaf) {
      const { level, node } = item;

      items.push(<LeafRenderer key={node.id} level={level} node={node} />);

      continue;
    }

    const { isExpanded, level, node, onToggle } = item;

    items.push(
      <BranchRenderer
        isExpanded={isExpanded}
        key={node.id}
        level={level}
        node={node}
        onToggle={onToggle}
      />,
    );
  }

  return items;
}
