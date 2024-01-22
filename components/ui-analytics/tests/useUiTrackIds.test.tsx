import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiAnalytics, useUiTrackIds } from '~';

type Ids = {
  isUndefined: undefined;
  isNull: null;
  isFalse: false;
  isEmpty: '';
  isString: string;
};

type ExpectedIds = Record<keyof Ids, string | undefined>;

type Sample = {
  trackId: string | null | undefined;
  expected: ExpectedIds;
};

const samples: Sample[] = [
  {
    trackId: undefined,
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: undefined,
    },
  },
  {
    trackId: null,
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: undefined,
    },
  },
  {
    trackId: '',
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: undefined,
    },
  },
  {
    trackId: 'parent',
    expected: {
      isUndefined: undefined,
      isNull: undefined,
      isFalse: undefined,
      isEmpty: undefined,
      isString: 'parent--child',
    },
  },
];

function resultOf(trackId: string | null | undefined): ExpectedIds {
  const { result } = renderHook(
    () =>
      useUiTrackIds({
        isUndefined: undefined,
        isNull: null,
        isFalse: false,
        isEmpty: '',
        isString: 'child',
      }),
    {
      wrapper:
        trackId === undefined
          ? undefined
          : ({ children }) => <UiAnalytics trackId={trackId}>{children}</UiAnalytics>,
    },
  );

  return result.current;
}

describe('useUiTrackIds', () => {
  it.each(samples)('returns string if `trackId` and `id` are string', ({ trackId, expected }) => {
    const actual = resultOf(trackId);

    expect(actual).toEqual(expected);
  });
});
