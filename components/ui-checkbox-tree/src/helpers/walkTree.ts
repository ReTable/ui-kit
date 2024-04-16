import { Tree, TreeBranch, TreeLeaf } from '@tabula/ui-tree';

import { isBranch } from './isBranch';

type TransformLeaf<Leaf extends TreeLeaf, Result> = (node: Leaf) => Result;

type TransformBranch<Leaf extends TreeLeaf, Result> = (node: TreeBranch<Leaf>) => Result;

type Result<TargetLeaf, TargetBranch> =
  | { isLeaf: true; target: TargetLeaf }
  | { isLeaf: false; target: TargetBranch };

export function* walkTree<Leaf extends TreeLeaf, TargetLeaf, TargetBranch>(
  tree: Tree<Leaf>,
  transformLeaf: TransformLeaf<Leaf, TargetLeaf>,
  transformBranch: TransformBranch<Leaf, TargetBranch>,
): Generator<Result<TargetLeaf, TargetBranch>> {
  const queue = [...tree];

  let cursor = 0;

  while (cursor < queue.length) {
    const node = queue[cursor];

    cursor += 1;

    if (isBranch(node)) {
      yield { isLeaf: false, target: transformBranch(node) };

      queue.splice(cursor, 0, ...node.children);
    } else {
      yield { isLeaf: true, target: transformLeaf(node) };
    }
  }
}
