import { describe, expect, it } from 'vitest';

import { getTrackId } from '../src';

type Sample = {
  scope: string | null | undefined;
  id: string | false | null | undefined;
  expected: string | undefined;
};

const samples: Sample[] = [
  { scope: undefined, id: undefined, expected: undefined },
  { scope: undefined, id: null, expected: undefined },
  { scope: undefined, id: false, expected: undefined },
  { scope: undefined, id: '', expected: undefined },
  { scope: undefined, id: 'id', expected: undefined },
  { scope: null, id: undefined, expected: undefined },
  { scope: null, id: null, expected: undefined },
  { scope: null, id: false, expected: undefined },
  { scope: null, id: '', expected: undefined },
  { scope: null, id: 'id', expected: undefined },
  { scope: '', id: undefined, expected: undefined },
  { scope: '', id: null, expected: undefined },
  { scope: '', id: false, expected: undefined },
  { scope: '', id: '', expected: undefined },
  { scope: '', id: 'id', expected: undefined },
  { scope: 'parent', id: undefined, expected: 'parent' },
  { scope: 'parent', id: null, expected: 'parent' },
  { scope: 'parent', id: false, expected: undefined },
  { scope: 'parent', id: '', expected: undefined },
  { scope: 'parent', id: 'child', expected: 'parent--child' },
];

describe('getTrackId', () => {
  it.each(samples)(
    'returns $expected if `scope` is $trackId and `id` is $id',
    ({ scope, id, expected }) => {
      const actual = getTrackId(scope, id);

      expect(actual).toBe(expected);
    },
  );
});
