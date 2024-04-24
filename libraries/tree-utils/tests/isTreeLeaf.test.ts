import { describe, expect, it } from 'vitest';

import { isTreeLeaf } from '~';

import { Leaf } from './types';

describe('isTreeLeaf', () => {
  it('returns true if node is leaf', () => {
    expect(isTreeLeaf<Leaf>({ id: 1 })).toBe(true);
  });

  it('returns false if node is branch', () => {
    expect(isTreeLeaf<Leaf>({ id: 1, children: [] })).toBe(false);
  });
});
