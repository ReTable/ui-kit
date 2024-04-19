import { TreeLeaf } from '@tabula/tree-utils';

const EMPTY_BUILDER = (): undefined => {
  return;
};

export function createTestIdBuilder<Leaf extends TreeLeaf>(
  testId?: string,
): (id: Leaf['id']) => string | undefined {
  if (testId == null) {
    return EMPTY_BUILDER;
  }

  return (id) => `${testId}--${id}`;
}
