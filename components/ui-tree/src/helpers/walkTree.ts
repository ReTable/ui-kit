import { isBranch } from '../helpers';
import { Tree, TreeLeaf, TreeNode } from '../types';

type QueueItem<Leaf extends TreeLeaf> = {
  item: TreeNode<Leaf>;
  level: number;
  parentId: Leaf['id'] | null;
};

type Queue<Leaf extends TreeLeaf> = Array<QueueItem<Leaf>>;

type BranchFilter<Leaf extends TreeLeaf> = (id: Leaf['id']) => boolean;

export function* walkTree<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  skipBranch?: BranchFilter<Leaf>,
): Generator<QueueItem<Leaf>> {
  if (tree.length === 0) {
    return;
  }

  const queue: Queue<Leaf> = tree.map((it) => ({
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

    const enqueued = item.children.map<QueueItem<Leaf>>((it) => ({
      item: it,
      level: level + 1,
      parentId: item.id,
    }));

    queue.splice(cursor, 0, ...enqueued);
  }
}
