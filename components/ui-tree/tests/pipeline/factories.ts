import { Branch, Leaf } from '~';

import { Data, HiddenBranch, HiddenLeaf, Kind, VisibleBranch, VisibleLeaf } from './types';

export function visibleLeaf(
  { id, data: { name } }: Leaf<number, Data>,
  level: number,
): VisibleLeaf {
  return { kind: Kind.VisibleLeaf, id, name, level, testId: `leaf-${id}` };
}

export function hiddenLeaf({ id, data: { name } }: Leaf<number, Data>): HiddenLeaf {
  return { kind: Kind.HiddenLeaf, id, name, testId: `leaf-${id}` };
}

export function visibleBranch(
  { id, data: { name } }: Branch<number, Data>,
  level: number,
  isExpanded: boolean,
): VisibleBranch {
  return { kind: Kind.VisibleBranch, id, name, level, isExpanded, testId: `branch-${id}` };
}

export function hiddenBranch({ id, data: { name } }: Branch<number, Data>): HiddenBranch {
  return { kind: Kind.HiddenBranch, id, name, testId: `branch-${id}` };
}
