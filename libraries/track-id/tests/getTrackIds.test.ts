import { describe, expect, it } from 'vitest';

import { getTrackIds } from '~';

type Ids = {
  isUndefined: undefined;
  isNull: null;
  isFalse: false;
  isEmpty: '';
  isString: string;
};

type ExpectedIds = Record<keyof Ids, string | undefined>;

type Sample = {
  scope: string | null | undefined;
  expected: ExpectedIds;
};

const samples: Sample[] = [
  {
    scope: undefined,
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: undefined,
    },
  },
  {
    scope: null,
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: undefined,
    },
  },
  {
    scope: '',
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: undefined,
    },
  },
  {
    scope: 'parent',
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: 'parent--child',
    },
  },
];

describe('getTrackIds', () => {
  it.each(samples)('returns string if `scope` and `id` are strings', ({ scope, expected }) => {
    const actual = getTrackIds(scope, {
      isUndefined: undefined,
      isNull: null,
      isFalse: false,
      isEmpty: '',
      isString: 'child',
    });

    expect(actual).toEqual(expected);
  });
});
