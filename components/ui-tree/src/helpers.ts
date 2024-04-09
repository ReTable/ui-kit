import { Branch, Item, Tree } from './types';

export function isBranch<Data, Id>(item: Item<Data, Id>): item is Branch<Data, Id> {
  return 'children' in item;
}

type QueueItem<Data, Id> = [Item<Data, Id>, number];

export function* walkTree<Data, Id>(tree: Tree<Data, Id>): Generator<QueueItem<Data, Id>> {
  if (tree.length === 0) {
    return;
  }

  const queue: Array<QueueItem<Data, Id>> = tree.map((it) => [it, 0]);

  let cursor = 0;

  while (cursor < tree.length) {
    const [item, level] = queue[cursor];

    yield [item, level];

    if (isBranch(item)) {
      const enqueued = item.children.map<QueueItem<Data, Id>>((it) => [it, level + 1]);

      queue.splice(cursor + 1, 0, ...enqueued);
    }

    cursor += 1;
  }
}
