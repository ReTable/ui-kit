import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useFlag } from '~';

describe('useFlag', () => {
  describe('default value', () => {
    it('has true value when given true', () => {
      const { result } = renderHook(() => useFlag(true));

      expect(result.current[0]).toBe(true);
    });

    it('has true value when given false', () => {
      const { result } = renderHook(() => useFlag(false));

      expect(result.current[0]).toBe(false);
    });
  });

  describe('change', () => {
    it('changes flag to the given state', () => {
      const { result } = renderHook(() => useFlag(false));

      act(() => {
        result.current[1].change(true);
      });

      expect(result.current[0]).toBe(true);

      act(() => {
        result.current[1].change(false);
      });

      expect(result.current[0]).toBe(false);

      act(() => {
        result.current[1].change(false);
      });

      expect(result.current[0]).toBe(false);
    });
  });

  describe('toggle', () => {
    it('toggles flag', () => {
      const { result } = renderHook(() => useFlag(false));

      act(() => {
        result.current[1].toggle();
      });

      expect(result.current[0]).toBe(true);

      act(() => {
        result.current[1].toggle();
      });

      expect(result.current[0]).toBe(false);
    });
  });

  describe('on', () => {
    it('enables flag', () => {
      const { result } = renderHook(() => useFlag(false));

      act(() => {
        result.current[1].on();
      });

      expect(result.current[0]).toBe(true);

      act(() => {
        result.current[1].on();
      });

      expect(result.current[0]).toBe(true);
    });
  });

  describe('off', () => {
    it('enables flag', () => {
      const { result } = renderHook(() => useFlag(true));

      act(() => {
        result.current[1].off();
      });

      expect(result.current[0]).toBe(false);

      act(() => {
        result.current[1].off();
      });

      expect(result.current[0]).toBe(false);
    });
  });
});
