import { useCallback, useEffect, useState } from 'react';

import { Tree, TreeLeaf } from '@tabula/tree-utils';

import { syncExpandedIds, toggle } from './helpers';

type ExpandHandler<Id> = (id: Id) => void;

type Result<Leaf extends TreeLeaf> = [Set<Leaf['id']>, ExpandHandler<Leaf['id']>];

export function useExpanded<Leaf extends TreeLeaf>(tree: Tree<Leaf>): Result<Leaf> {
  const [expanded, setExpanded] = useState<Set<Leaf['id']>>(new Set());

  // NOTE: Sync `expanded` set with ids from the `tree`:
  //
  //       - remove all non-branch items (if they're transited from branches to leafs);
  //       - keep only ids which already was in the `expanded` set.
  useEffect(() => {
    setExpanded((current) => syncExpandedIds(current, tree));
  }, [tree]);

  const handleToggle = useCallback(
    (id: Leaf['id']) => {
      setExpanded((current) => toggle(current, id, tree));
    },
    [tree],
  );

  return [expanded, handleToggle];
}
