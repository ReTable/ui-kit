import { isBranch } from '../helpers';
import { Item, Tree } from '../types';

type QueueItem<Data, Id> = [Item<Data, Id>, number];

type Queue<Data, Id> = Array<QueueItem<Data, Id>>;

type BranchFilter<Id> = (id: Id) => boolean;

export function* walkTree<Data, Id>(
  tree: Tree<Data, Id>,
  skipBranch?: BranchFilter<Id>,
): Generator<QueueItem<Data, Id>> {
  if (tree.length === 0) {
    return;
  }

  const queue: Queue<Data, Id> = tree.map((it) => [it, 0]);

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

    const enqueued = item.children.map<QueueItem<Data, Id>>((it) => [it, level + 1]);

    queue.splice(cursor, 0, ...enqueued);
  }
}
