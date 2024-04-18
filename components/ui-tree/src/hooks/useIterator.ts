import { useMemo } from 'react';

import { TraverseFilter, Tree, TreeLeaf, depth } from '@tabula/tree-utils';

import { Id, RenderPipeline } from '../types';

export type IsExpanded<Leaf extends TreeLeaf> = (id: Id<Leaf>) => boolean;

export type Toggle<Leaf extends TreeLeaf> = (id: Id<Leaf>) => void;

export type Options<Leaf extends TreeLeaf> = {
  filter: TraverseFilter<Leaf>;

  isExpanded: IsExpanded<Leaf>;

  onToggle: Toggle<Leaf>;
};

export function useIterator<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  { filter, isExpanded, onToggle }: Options<Leaf>,
): RenderPipeline<Leaf> {
  return useMemo(
    () => ({
      *[Symbol.iterator]() {
        for (const item of depth(tree, { filter })) {
          if (item.isLeaf) {
            yield item;

            continue;
          }

          yield {
            ...item,

            isExpanded: isExpanded(item.node.id),

            onToggle: () => {
              onToggle(item.node.id);
            },
          };
        }
      },
    }),
    [tree, filter, isExpanded, onToggle],
  );
}
