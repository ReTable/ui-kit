import { TreeBranch } from '~';

import { HiddenBranch, HiddenLeaf, Kind, Leaf, VisibleBranch, VisibleLeaf } from './types';

export function visibleLeaf({ id, name }: Leaf, level: number): VisibleLeaf {
  return { kind: Kind.VisibleLeaf, id, name, level, testId: `leaf-${id}` };
}

export function hiddenLeaf({ id, name }: Leaf): HiddenLeaf {
  return { kind: Kind.HiddenLeaf, id, name, testId: `leaf-${id}` };
}

export function visibleBranch(
  { id, name }: TreeBranch<Leaf>,
  level: number,
  isExpanded: boolean,
): VisibleBranch {
  return { kind: Kind.VisibleBranch, id, name, level, isExpanded, testId: `branch-${id}` };
}

export function hiddenBranch({ id, name }: TreeBranch<Leaf>): HiddenBranch {
  return { kind: Kind.HiddenBranch, id, name, testId: `branch-${id}` };
}
