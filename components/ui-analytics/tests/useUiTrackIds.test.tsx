import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiAnalytics, useUiTrackIds } from '~';

type Ids = {
  isNull: null;
  isFalse: false;
  isEmpty: '';
  isString: string;
};

type ExpectedIds = Record<keyof Ids, string | null>;

type Sample = {
  trackId: string | null | undefined;
  expected: ExpectedIds;
};

const samples: Sample[] = [
  {
    trackId: undefined,
    expected: {
      isNull: null,
      isFalse: null,
      isEmpty: null,
      isString: null,
    },
  },
  {
    trackId: null,
    expected: {
      isNull: null,
      isFalse: null,
      isEmpty: null,
      isString: null,
    },
  },
  {
    trackId: '',
    expected: {
      isNull: null,
      isFalse: null,
      isEmpty: null,
      isString: null,
    },
  },
  {
    trackId: 'parent',
    expected: {
      isNull: null,
      isFalse: null,
      isEmpty: null,
      isString: 'parent--child',
    },
  },
];

function resultOf(trackId: string | null | undefined): ExpectedIds {
  const { result } = renderHook(
    () =>
      useUiTrackIds({
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
