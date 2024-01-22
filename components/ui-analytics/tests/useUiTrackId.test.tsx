import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiAnalytics, useUiTrackId } from '~';

type Sample = {
  trackId: string | null | undefined;
  id: string | false | null | undefined;
  expected: string | undefined;
};

const samples: Sample[] = [
  { trackId: undefined, id: undefined, expected: undefined },
  { trackId: undefined, id: null, expected: undefined },
  { trackId: undefined, id: false, expected: undefined },
  { trackId: undefined, id: '', expected: undefined },
  { trackId: undefined, id: 'child', expected: undefined },
  { trackId: null, id: undefined, expected: undefined },
  { trackId: null, id: null, expected: undefined },
  { trackId: null, id: false, expected: undefined },
  { trackId: null, id: '', expected: undefined },
  { trackId: null, id: 'child', expected: undefined },
  { trackId: '', id: undefined, expected: undefined },
  { trackId: '', id: null, expected: undefined },
  { trackId: '', id: false, expected: undefined },
  { trackId: '', id: '', expected: undefined },
  { trackId: '', id: 'child', expected: undefined },
  { trackId: 'parent', id: undefined, expected: 'parent' },
  { trackId: 'parent', id: null, expected: 'parent' },
  { trackId: 'parent', id: false, expected: undefined },
  { trackId: 'parent', id: '', expected: undefined },
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
