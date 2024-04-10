import { Tree } from '../types';

import { isBranch } from './isBranch';
import { walkTree } from './walkTree';

export function syncExpandedIds<Id>(current: Set<Id>, tree: Tree<Id, unknown>): Set<Id> {
  const next = new Set<Id>();

  for (const { item } of walkTree(tree)) {
    if (isBranch(item) && current.has(item.id)) {
      next.add(item.id);
    }
  }

  // NOTE: If `current` and `next` are have the same size, we can say, they're the same.
  //
  //       In that case we can return original set, instead of a new one copy.
  return next.size === current.size ? current : next;
}
