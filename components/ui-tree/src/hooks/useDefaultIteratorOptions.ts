import { useCallback, useEffect, useState } from 'react';

import { Tree, TreeLeaf } from '@tabula/tree-utils';

import { branchesOf } from '../helpers';
import { Ids } from '../types';

import { Options as IteratorOptions } from './useIterator';

export function useDefaultIteratorOptions<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
): IteratorOptions<Leaf> {
  const [expanded, setExpanded] = useState<Ids<Leaf>>(new Set());

  // NOTE: Keep only existing branches ids.
  useEffect(() => {
    setExpanded((current) => {
      const next: Ids<Leaf> = new Set();

      for (const { node } of branchesOf(tree)) {
        if (current.has(node.id)) {
          next.add(node.id);
        }
      }

      return next.size === current.size ? current : next;
    });
  }, [tree]);

  return {
    filter: useCallback(
      ({ parentId }) => {
        // NOTE: Show only nodes if they on the top level (when a parent id isn't exists) or if a parent is expanded.
        return parentId == null || expanded.has(parentId);
      },
      [expanded],
    ),

    isExpanded: useCallback(
      (id) => {
        return expanded.has(id);
      },
      [expanded],
    ),

    onToggle: useCallback(
      (id) => {
        setExpanded((current) => {
          const next: Ids<Leaf> = new Set(current);

          if (next.has(id)) {
            for (const { node } of branchesOf(tree, id)) {
              next.delete(node.id);
            }
          } else {
            next.add(id);
          }

          return next.size === current.size ? current : next;
        });
      },
      [tree],
    ),
  };
}
