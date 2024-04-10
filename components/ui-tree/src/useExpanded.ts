import { useCallback, useEffect, useState } from 'react';

import { syncExpandedIds, toggle } from './helpers';
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
    setExpanded((current) => syncExpandedIds(current, tree));
  }, [tree]);

  const handleToggle = useCallback(
    (id: Id) => {
      setExpanded((current) => toggle(current, id, tree));
    },
    [tree],
  );

  return [expanded, handleToggle];
}
