import { randUuid } from '@ngneat/falso';
import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiAnalytics, useUiTrackId } from '~';

describe('useUiTrackId', () => {
  it('returns null without context', () => {
    const { result } = renderHook(() => useUiTrackId());

    expect(result.current).toBe(null);
  });

  it('returns null with null context', () => {
    const { result } = renderHook(() => useUiTrackId(), {
      wrapper({ children }) {
        return <UiAnalytics>{children}</UiAnalytics>;
      },
    });

    expect(result.current).toBe(null);
  });

  it('returns provided id', () => {
    const trackId = randUuid();

    const { result } = renderHook(() => useUiTrackId(), {
      wrapper({ children }) {
        return <UiAnalytics trackId={trackId}>{children}</UiAnalytics>;
      },
    });

    expect(result.current).toBe(trackId);
  });
});
