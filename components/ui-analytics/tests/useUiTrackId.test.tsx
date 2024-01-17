import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiAnalytics, useUiTrackId } from '~';

type Sample = {
  trackId: string | null | undefined;
  id: string | false | null | undefined;
  expected: string | null;
};

const samples: Sample[] = [
  { trackId: undefined, id: undefined, expected: null },
  { trackId: undefined, id: null, expected: null },
  { trackId: undefined, id: false, expected: null },
  { trackId: undefined, id: '', expected: null },
  { trackId: undefined, id: 'child', expected: null },
  { trackId: null, id: undefined, expected: null },
  { trackId: null, id: null, expected: null },
  { trackId: null, id: false, expected: null },
  { trackId: null, id: '', expected: null },
  { trackId: null, id: 'child', expected: null },
  { trackId: '', id: undefined, expected: null },
  { trackId: '', id: null, expected: null },
  { trackId: '', id: false, expected: null },
  { trackId: '', id: '', expected: null },
  { trackId: '', id: 'child', expected: null },
  { trackId: 'parent', id: undefined, expected: 'parent' },
  { trackId: 'parent', id: null, expected: 'parent' },
  { trackId: 'parent', id: false, expected: null },
  { trackId: 'parent', id: '', expected: null },
  { trackId: 'parent', id: 'child', expected: 'parent--child' },
];

function resultOf(trackId: string | null | undefined, id: string | false | null | undefined) {
  const { result } = renderHook(() => (id === undefined ? useUiTrackId() : useUiTrackId(id)), {
    wrapper:
      trackId === undefined
        ? undefined
        : ({ children }) => <UiAnalytics trackId={trackId}>{children}</UiAnalytics>,
  });

  return result.current;
}

describe('useTrackId', () => {
  it.each(samples)(
    'returns $expected if `trackId` is $trackId and `id` is $id',
    ({ trackId, id, expected }) => {
      const actual = resultOf(trackId, id);

      expect(actual).toBe(expected);
    },
  );
});
