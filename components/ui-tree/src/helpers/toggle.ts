import { Tree } from '../types';

import { isBranch } from './isBranch';
import { walkTree } from './walkTree';

function expand<Id>(current: Set<Id>, id: Id): Set<Id> {
  const next = new Set(current);

  next.add(id);

  return next;
}

type Location<Id> =
  | { isInside: true; targetParentId: Id | null }
  | { isInside: false; targetParentId: null };

function collapse<Id>(current: Set<Id>, id: Id, tree: Tree<Id, unknown>): Set<Id> {
  const next = new Set(current);

  next.delete(id);

  let location: Location<Id> = { isInside: false, targetParentId: null };

  for (const { item, parentId } of walkTree(tree)) {
    // NOTE: Mark when we go in to the target branch.
    if (item.id === id) {
      location = { isInside: true, targetParentId: parentId };

      continue;
    }

    // NOTE: If we're not in the target branch, then go to the next item.
    if (!location.isInside) {
      continue;
    }

    // NOTE: When we already inside the target branch, and the current element on the same level with the target branch,
    //       then we know about we go out of the target branch.
    //
    //       In that case we can stop iteration, because rest of items is useless.
    if (item.id === location.targetParentId || parentId === location.targetParentId) {
      break;
    }

    // NOTE: Ignore non branch items.
    if (!isBranch(item)) {
      continue;
    }

    // NOTE: Collapse child item too.
    next.delete(item.id);
  }

  return next;
}

export function toggle<Id>(current: Set<Id>, id: Id, tree: Tree<Id, unknown>): Set<Id> {
  return current.has(id) ? collapse(current, id, tree) : expand(current, id);
}
