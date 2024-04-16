import { Tree, TreeLeaf, TreeNode } from '@tabula/ui-tree';

import { isBranch } from './isBranch';

type QueueItem<Leaf extends TreeLeaf> = [TreeNode<Leaf>, number];

export function collectIds<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  id: Leaf['id'],
): Array<Leaf['id']> {
  const result: Array<Leaf['id']> = [];

  const queue = tree.map<QueueItem<Leaf>>((it) => [it, 0]);

  let cursor = 0;

  let initialLevel: number | null = null;

  while (cursor < queue.length) {
    const [node, level] = queue[cursor];

    cursor += 1;

    if (initialLevel != null && level === initialLevel) {
      break;
    }

    if (node.id === id) {
      initialLevel = level;
    }

    if (initialLevel != null) {
      result.push(id);
    }

    if (isBranch(node)) {
      const enqueued = node.children.map<QueueItem<Leaf>>((it) => [it, level + 1]);

      queue.splice(cursor, 0, ...enqueued);
    }
  }

  return result;
}
