import { useCallback, useEffect, useMemo, useState } from 'react';

import { Tree, TreeLeaf, breadth } from '@tabula/tree-utils';

import { branchesOf } from '../helpers';
import { Ids, InternalMatch } from '../types';

import { Options as IteratorOptions } from './useIterator';

export function useSearchIteratorOptions<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  isMatches: InternalMatch<Leaf> | null,
): IteratorOptions<Leaf> {
  const visible = useMemo(() => {
    const ids: Ids<Leaf> = new Set();

    // NOTE: Do not work if we aren't use search.
    if (isMatches == null) {
      return ids;
    }

    for (const { node, parentIds } of breadth(tree)) {
      // NOTE: Skip nodes which not matched.
      if (!isMatches(node)) {
        continue;
      }

      ids.add(node.id);

      // NOTE: If node is matched, then we must show its parents too, even they aren't matched.
      for (const parentId of parentIds) {
        ids.add(parentId);
      }
    }

    return ids;
  }, [isMatches, tree]);

  const [collapsed, setCollapsed] = useState<Ids<Leaf>>(new Set());

  useEffect(() => {
    setCollapsed(new Set());
  }, [isMatches]);

  useEffect(() => {
    setCollapsed((current) => {
      const next = new Set(current);

      // NOTE: Keep ids only of visible nodes.
      for (const id of current) {
        if (visible.has(id)) {
          next.add(id);
        }
      }

      return next.size === current.size ? current : next;
    });
  }, [visible]);

  return {
    filter: useCallback(
      ({ node, parentId }) => {
        // NOTE: Don't show node if it has a parent, and it's parent is collapsed.
        if (parentId != null && collapsed.has(parentId)) {
          return false;
        }

        // NOTE: Otherwise, show node only if it's visible (matched by search before).
        return visible.has(node.id);
      },
      [collapsed, visible],
    ),

    isExpanded: useCallback(
      (id) => {
        return !collapsed.has(id);
      },
      [collapsed],
    ),

    onToggle: useCallback(
      (target) => {
        setCollapsed((current) => {
          const next: Ids<Leaf> = new Set(current);

          if (next.has(target)) {
            next.delete(target);
          } else {
            for (const { node } of branchesOf(tree, target)) {
              next.add(node.id);
            }
          }

          return next.size === current.size ? current : next;
        });
      },
      [tree],
    ),
  };
}
