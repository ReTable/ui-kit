import { describe, expect, it } from 'vitest';

import { isTreeBranch } from '~';

import { Leaf } from './types';

describe('isTreeBranch', () => {
  it('returns false if node is leaf', () => {
    expect(isTreeBranch<Leaf>({ id: 1 })).toBe(false);
  });

  it('returns true if node is branch', () => {
    expect(isTreeBranch<Leaf>({ id: 1, children: [] })).toBe(true);
  });
});
