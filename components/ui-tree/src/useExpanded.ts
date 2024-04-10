import { useCallback, useEffect, useState } from 'react';

import { walkTree } from './helpers';
import { Tree } from './types';

type ExpandHandler<Id> = (id: Id) => void;

type Result<Id> = [Set<Id>, ExpandHandler<Id>];

export function useExpanded<Id>(tree: Tree<Id, unknown>): Result<Id> {
  const [expanded, setExpanded] = useState<Set<Id>>(new Set());

  useEffect(() => {
    setExpanded((current) => {
      const next = new Set<Id>();

      for (const [item] of walkTree(tree)) {
        if (current.has(item.id)) {
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
