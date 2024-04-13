import { isBranch } from '../helpers';
import { Item, Tree } from '../types';

type QueueItem<Id, Data> = {
  item: Item<Id, Data>;
  level: number;
  parentId: Id | null;
};

type Queue<Id, Data> = Array<QueueItem<Id, Data>>;

type BranchFilter<Id> = (id: Id) => boolean;

export function* walkTree<Id, Data>(
  tree: Tree<Id, Data>,
  skipBranch?: BranchFilter<Id>,
): Generator<QueueItem<Id, Data>> {
  if (tree.length === 0) {
    return;
  }

  const queue: Queue<Id, Data> = tree.map((it) => ({
    item: it,
    level: 0,
    parentId: null,
  }));

  let cursor = 0;

  while (cursor < queue.length) {
    const { item, parentId, level } = queue[cursor];

    cursor += 1;

    yield { item, parentId, level };

    if (!isBranch(item)) {
      continue;
    }

    if (skipBranch?.(item.id)) {
      continue;
    }

    const enqueued = item.children.map<QueueItem<Id, Data>>((it) => ({
      item: it,
      level: level + 1,
      parentId: item.id,
    }));

    queue.splice(cursor, 0, ...enqueued);
  }
}
