import { isBranch } from '../helpers';
import { Item, Tree } from '../types';

type QueueItem<Id, Data> = [Item<Id, Data>, number];

type Queue<Id, Data> = Array<QueueItem<Id, Data>>;

type BranchFilter<Id> = (id: Id) => boolean;

export function* walkTree<Id, Data>(
  tree: Tree<Id, Data>,
  skipBranch?: BranchFilter<Id>,
): Generator<QueueItem<Id, Data>> {
  if (tree.length === 0) {
    return;
  }

  const queue: Queue<Id, Data> = tree.map((it) => [it, 0]);

  let cursor = 0;

  while (cursor < queue.length) {
    const [item, level] = queue[cursor];

    cursor += 1;

    yield [item, level];

    if (!isBranch(item)) {
      continue;
    }

    if (skipBranch?.(item.id)) {
      continue;
    }

    const enqueued = item.children.map<QueueItem<Id, Data>>((it) => [it, level + 1]);

    queue.splice(cursor, 0, ...enqueued);
  }
}
