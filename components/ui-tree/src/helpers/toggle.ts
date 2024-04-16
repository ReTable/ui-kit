import { Tree, TreeLeaf, isTreeBranch } from '@tabula/tree-utils';

import { walkTree } from './walkTree';

function expand<Id>(current: Set<Id>, id: Id): Set<Id> {
  const next = new Set(current);

  next.add(id);

  return next;
}

type Location<Leaf extends TreeLeaf> =
  | { isInside: true; targetParentId: Leaf['id'] | null }
  | { isInside: false; targetParentId: null };

function collapse<Leaf extends TreeLeaf>(
  current: Set<Leaf['id']>,
  id: Leaf['id'],
  tree: Tree<Leaf>,
): Set<Leaf['id']> {
  const next = new Set(current);

  next.delete(id);

  let location: Location<Leaf> = { isInside: false, targetParentId: null };

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
    if (!isTreeBranch(item)) {
      continue;
    }

    // NOTE: Collapse child item too.
    next.delete(item.id);
  }

  return next;
}

export function toggle<Leaf extends TreeLeaf>(
  current: Set<Leaf['id']>,
  id: Leaf['id'],
  tree: Tree<Leaf>,
): Set<Leaf['id']> {
  return current.has(id) ? collapse(current, id, tree) : expand(current, id);
}
