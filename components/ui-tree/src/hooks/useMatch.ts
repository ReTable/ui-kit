import { useMemo } from 'react';

import { TreeLeaf } from '@tabula/tree-utils';

import { InternalMatch, Match } from '../types';

type Options<Leaf extends TreeLeaf> = {
  pattern?: string;

  match?: Match<Leaf>;
};

export function useMatch<Leaf extends TreeLeaf>({
  match,
  pattern,
}: Options<Leaf>): InternalMatch<Leaf> | null {
  return useMemo(() => {
    if (match == null) {
      return null;
    }

    if (pattern == null || pattern.length === 0) {
      return null;
    }

    return (node) => match(node, pattern);
  }, [match, pattern]);
}
