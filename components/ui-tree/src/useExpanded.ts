import { useCallback, useEffect, useState } from 'react';

import { isBranch, walkTree } from './helpers';
import { Tree } from './types';

type ExpandHandler<Id> = (id: Id) => void;

type Result<Id> = [Set<Id>, ExpandHandler<Id>];

export function useExpanded<Id>(tree: Tree<Id, unknown>): Result<Id> {
  const [expanded, setExpanded] = useState<Set<Id>>(new Set());

  // NOTE: Sync `expanded` set with ids from the `tree`:
  //
  //       - remove all non-branch items (if they're transited from branches to leafs);
  //       - keep only ids which already was in the `expanded` set.
  useEffect(() => {
    setExpanded((current) => {
      const next = new Set<Id>();

      for (const [item] of walkTree(tree)) {
        if (isBranch(item) && current.has(item.id)) {
          next.add(item.id);
        }
      }

      return next;
    });
  }, [tree]);

  const handleToggle = useCallback((id: Id) => {
    setExpanded((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }, []);

  return [expanded, handleToggle];
}
