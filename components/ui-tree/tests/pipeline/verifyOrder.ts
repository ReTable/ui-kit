import { expect } from 'vitest';

import { Kind, Pipeline } from './types';

export function verifyOrder(root: HTMLElement, pipeline: Pipeline): void {
  const testIds = pipeline.reduce<string[]>((ids, it) => {
    if (it.kind === Kind.VisibleLeaf || it.kind === Kind.VisibleBranch) {
      ids.push(it.testId);
    }

    return ids;
  }, []);

  for (let idx = 0; idx < root.childNodes.length; idx += 1) {
    const testId = testIds[idx];
    const node = root.childNodes.item(idx);

    expect(node, `Node with testid ${testId} should be on position ${idx}`).toHaveAttribute(
      'data-testid',
      testIds[idx],
    );
  }
}
