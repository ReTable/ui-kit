import { randUuid } from '@ngneat/falso';
import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiAnalytics, useUiTrackIds } from '~';

describe('useUiTrackIds', () => {
  it('returns null without context', () => {
    const ids = {
      button: randUuid(),
      label: randUuid(),
      empty: '',
    };

    const { result } = renderHook(() => useUiTrackIds(ids));

    expect(result.current).toEqual({
      button: null,
      label: null,
      empty: null,
    });
  });

  it('returns null with null context', () => {
    const ids = {
      button: randUuid(),
      label: randUuid(),
      empty: '',
    };

    const { result } = renderHook(() => useUiTrackIds(ids), {
      wrapper({ children }) {
        return <UiAnalytics>{children}</UiAnalytics>;
      },
    });

    expect(result.current).toEqual({
      button: null,
      label: null,
      empty: null,
    });
  });

  it('returns provided id', () => {
    const trackId = randUuid();

    const ids = {
      button: randUuid(),
      label: randUuid(),
      empty: '',
    };

    const { result } = renderHook(() => useUiTrackIds(ids), {
      wrapper({ children }) {
        return <UiAnalytics trackId={trackId}>{children}</UiAnalytics>;
      },
    });

    expect(result.current).toEqual({
      button: `${trackId}--${ids.button}`,
      label: `${trackId}--${ids.label}`,
      empty: trackId,
    });
  });
});
