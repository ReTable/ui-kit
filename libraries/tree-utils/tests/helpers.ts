import { expect } from 'vitest';

import { TraverseItem, TreeNode, isTreeBranch } from '~';

import { Leaf } from './types';

type NodesMap = Map<number, TreeNode<Leaf>>;

type NodeBuilder = (id: number, children?: Array<TreeNode<Leaf>>) => TreeNode<Leaf>;

export function createBuilder(): [NodesMap, NodeBuilder] {
  const map: NodesMap = new Map();

  const builder: NodeBuilder = (id, children) => {
    const node = children == null ? { id } : { id, children };

    map.set(id, node);

    return node;
  };

  return [map, builder];
}

type PipelineItem = {
  id: number;

  level: number;

  parentIds: Array<Leaf['id']>;
};

export function toPipeline(
  items: PipelineItem[],
  map: Map<number, TreeNode<Leaf>>,
): Array<TraverseItem<Leaf>> {
  return items.map(({ id, level, parentIds }) => {
    const node = map.get(id);

    if (node == null) {
      throw new Error(`Unknown node with id "${id}"`);
    }

    return isTreeBranch(node)
      ? {
          node,

          isBranch: true,
          isLeaf: false,

          level,

          parentId: parentIds.at(-1),
          parentIds: new Set(parentIds),
        }
      : {
          node,

          isBranch: false,
          isLeaf: true,

          level,

          parentId: parentIds.at(-1),
          parentIds: new Set(parentIds),
        };
  });
}

export function verifyPipeline(
  actual: Array<TraverseItem<Leaf>>,
  expected: Array<TraverseItem<Leaf>>,
): void {
  expect(actual.length, 'Actual items length not equals to expected');

  // eslint-disable-next-line unicorn/no-for-loop
  for (let idx = 0; idx < expected.length; idx += 1) {
    expect(actual[idx]).toEqual(expected[idx]);

    expect(actual[idx].node).toBe(expected[idx].node);
  }
}
