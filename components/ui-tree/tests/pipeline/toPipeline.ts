import { Tree, TreeNode } from '~';

import { hiddenBranch, hiddenLeaf, visibleBranch, visibleLeaf } from './factories';
import { Leaf, Pipeline } from './types';

type QueueItem = {
  item: TreeNode<Leaf>;

  level: number;

  isVisible: boolean;
};

type Queue = QueueItem[];

export function toPipeline(tree: Tree<Leaf>, expanded: Set<number>): Pipeline {
  if (tree.length === 0) {
    return [];
  }

  const pipeline: Pipeline = [];

  const queue: Queue = tree.map((it) => ({
    item: it,
    level: 0,
    isVisible: true,
  }));

  let cursor = 0;

  while (cursor < queue.length) {
    const { item, level, isVisible } = queue[cursor];

    cursor += 1;

    if ('children' in item) {
      const isExpanded = expanded.has(item.id);

      pipeline.push(isVisible ? visibleBranch(item, level, isExpanded) : hiddenBranch(item));

      const enqueued = item.children.map<QueueItem>((it) => ({
        item: it,
        level: level + 1,
        isVisible: isExpanded,
      }));

      queue.splice(cursor, 0, ...enqueued);
    } else {
      pipeline.push(isVisible ? visibleLeaf(item, level) : hiddenLeaf(item));
    }
  }

  return pipeline;
}
