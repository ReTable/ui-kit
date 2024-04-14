import { screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Tree } from '~';

import { toPipeline } from './toPipeline';
import { Leaf } from './types';
import { verifyItems } from './verifyItems';
import { verifyOrder } from './verifyOrder';

export function verifyTree(tree: Tree<Leaf>, expanded = new Set<number>()): void {
  const root = screen.queryByTestId('tree');

  expect(root, 'The tree should be rendered').not.toBeNull();

  if (root == null) {
    return;
  }

  const pipeline = toPipeline(tree, expanded);

  verifyItems(root, pipeline);
  verifyOrder(root, pipeline);
}
