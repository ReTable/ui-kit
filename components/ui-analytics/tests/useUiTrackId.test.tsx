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

  it('returns parent id', () => {
    const trackId = randUuid();

    const { result } = renderHook(() => useUiTrackId(), {
      wrapper({ children }) {
        return <UiAnalytics trackId={trackId}>{children}</UiAnalytics>;
      },
    });

    expect(result.current).toBe(trackId);
  });

  describe('when id is provided', () => {
    it('returns null without context', () => {
      const id = randUuid();

      const { result } = renderHook(() => useUiTrackId(id));

      expect(result.current).toBe(null);
    });

    it('returns null with null context', () => {
      const id = randUuid();

      const { result } = renderHook(() => useUiTrackId(id), {
        wrapper({ children }) {
          return <UiAnalytics>{children}</UiAnalytics>;
        },
      });

      expect(result.current).toBe(null);
    });

    it('returns parent when id is empty', () => {
      const trackId = randUuid();

      const { result } = renderHook(() => useUiTrackId(''), {
        wrapper({ children }) {
          return <UiAnalytics trackId={trackId}>{children}</UiAnalytics>;
        },
      });

      expect(result.current).toBe(trackId);
    });

    it('returns provided id with parent', () => {
      const id = randUuid();
      const trackId = randUuid();

      const { result } = renderHook(() => useUiTrackId(id), {
        wrapper({ children }) {
          return <UiAnalytics trackId={trackId}>{children}</UiAnalytics>;
        },
      });

      expect(result.current).toBe(`${trackId}--${id}`);
    });
  });
});
