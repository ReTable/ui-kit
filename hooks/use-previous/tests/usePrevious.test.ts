import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Options, usePrevious } from '~';

function render<T>(initialValue: T, initialOptions?: Options<T>) {
  const { result, rerender } = renderHook(({ value, options }) => usePrevious<T>(value, options), {
    initialProps: {
      value: initialValue,

      options: initialOptions,
    },
  });

  return {
    result: {
      get previous(): T {
        return result.current[0];
      },

      get wasChanged(): boolean {
        return result.current[1];
      },
    },

    rerender: (value: T, options?: Options<T>) => {
      rerender({ value, options: { ...initialOptions, ...options } });
    },
  };
}

type Identifiable = {
  id: number;
};

function areEqual(previous: Identifiable, current: Identifiable) {
  return previous.id === current.id;
}

describe('usePrevious', () => {
  describe('initial value', () => {
    it('returns initial value as previous value on initial render', () => {
      const { previous } = render(0).result;

      expect(previous).toBe(0);
    });

    it("returns an initial value isn't changed", () => {
      const { wasChanged } = render(0).result;

      expect(wasChanged).toBe(false);
    });

    it("doesn't call `onChanged`", () => {
      const onChanged = vi.fn();

      render(0, { onChanged });

      expect(onChanged).not.toHaveBeenCalled();
    });
  });

  describe('when same value is provided', () => {
    it('returns the provided value', () => {
      const { result, rerender } = render(0);

      expect(result.previous).toBe(0);

      rerender(0);

      expect(result.previous).toBe(0);

      rerender(0);

      expect(result.previous).toBe(0);
    });

    it('returns `wasChanged` equals to false', () => {
      const { result, rerender } = render(0);

      expect(result.wasChanged).toBe(false);

      rerender(0);

      expect(result.wasChanged).toBe(false);

      rerender(0);

      expect(result.wasChanged).toBe(false);
    });

    it("doesn't call `onChanged`", () => {
      const onChanged = vi.fn();

      const { rerender } = render(0, { onChanged });

      expect(onChanged).not.toHaveBeenCalled();

      rerender(0);

      expect(onChanged).not.toHaveBeenCalled();

      rerender(0);

      expect(onChanged).not.toHaveBeenCalled();
    });

    describe('when `areEqual` provided and returns true', () => {
      it('returns the provided value', () => {
        const first = { id: 0 };
        const second = { ...first };
        const third = { ...second };

        const { result, rerender } = render(first, { areEqual });

        expect(result.previous).toBe(first);

        rerender(second);

        expect(result.previous).toBe(first);

        rerender(third);

        expect(result.previous).toBe(second);
      });

      it('returns `wasChanged` equals to false', () => {
        const first = { id: 0 };
        const second = { ...first };
        const third = { ...second };

        const { result, rerender } = render(first, { areEqual });

        expect(result.wasChanged).toBe(false);

        rerender(second);

        expect(result.wasChanged).toBe(false);

        rerender(third);

        expect(result.wasChanged).toBe(false);
      });

      it("doesn't call `onChanged`", () => {
        const onChanged = vi.fn();

        const first = { id: 0 };
        const second = { ...first };
        const third = { ...second };

        const { rerender } = render(first, { areEqual, onChanged });

        expect(onChanged).not.toHaveBeenCalled();

        rerender(second);

        expect(onChanged).not.toHaveBeenCalled();

        rerender(third);

        expect(onChanged).not.toHaveBeenCalled();
      });
    });
  });

  describe('when different value is provided', () => {
    it('returns the provided value', () => {
      const { result, rerender } = render(0);

      expect(result.previous).toBe(0);

      rerender(1);

      expect(result.previous).toBe(0);

      rerender(2);

      expect(result.previous).toBe(1);
    });

    it('returns `wasChanged` equals to true', () => {
      const { result, rerender } = render(0);

      expect(result.wasChanged).toBe(false);

      rerender(1);

      expect(result.wasChanged).toBe(true);

      rerender(2);

      expect(result.wasChanged).toBe(true);
    });

    it('calls `onChanged`', () => {
      const onChanged = vi.fn();

      const { rerender } = render<number>(0, { onChanged });

      expect(onChanged).not.toHaveBeenCalled();

      rerender(1);

      expect(onChanged).toHaveBeenCalledTimes(1);
      expect(onChanged).toHaveBeenLastCalledWith(0, 1);

      rerender(2);

      expect(onChanged).toHaveBeenCalledTimes(2);
      expect(onChanged).toHaveBeenLastCalledWith(1, 2);
    });

    describe('when `areEqual` provided and returns false', () => {
      it('returns new value', () => {
        const first = { id: 0 };
        const second = { id: 1 };
        const third = { id: 2 };

        const { result, rerender } = render(first, { areEqual });

        expect(result.previous).toBe(first);

        rerender(second);

        expect(result.previous).toBe(first);

        rerender(third);

        expect(result.previous).toBe(second);
      });

      it('returns `wasChanged` equals to false', () => {
        const first = { id: 0 };
        const second = { id: 1 };
        const third = { id: 2 };

        const { result, rerender } = render(first, { areEqual });

        expect(result.wasChanged).toBe(false);

        rerender(second);

        expect(result.wasChanged).toBe(true);

        rerender(third);

        expect(result.wasChanged).toBe(true);
      });

      it('calls `onChanged`', () => {
        const onChanged = vi.fn();

        const first = { id: 0 };
        const second = { id: 1 };
        const third = { id: 2 };

        const { rerender } = render(first, { areEqual, onChanged });

        expect(onChanged).not.toHaveBeenCalled();

        rerender(second);

        expect(onChanged).toHaveBeenCalledTimes(1);
        expect(onChanged).toHaveBeenLastCalledWith(first, second);

        rerender(third);

        expect(onChanged).toHaveBeenCalledTimes(2);
        expect(onChanged).toHaveBeenLastCalledWith(second, third);
      });
    });
  });

  it('detect changes', () => {
    const { result, rerender } = render(0);

    expect(result).toEqual({ previous: 0, wasChanged: false });

    rerender(0);

    expect(result).toEqual({ previous: 0, wasChanged: false });

    rerender(1);

    expect(result).toEqual({ previous: 0, wasChanged: true });

    rerender(1);

    expect(result).toEqual({ previous: 1, wasChanged: false });

    rerender(2);

    expect(result).toEqual({ previous: 1, wasChanged: true });
  });

  it('detect changes when `areEqual` is provided', () => {
    const { result, rerender } = render({ id: 0 }, { areEqual });

    expect(result).toEqual({ previous: { id: 0 }, wasChanged: false });

    rerender({ id: 0 });

    expect(result).toEqual({ previous: { id: 0 }, wasChanged: false });

    rerender({ id: 1 });

    expect(result).toEqual({ previous: { id: 0 }, wasChanged: true });

    rerender({ id: 1 });

    expect(result).toEqual({ previous: { id: 1 }, wasChanged: false });

    rerender({ id: 2 });

    expect(result).toEqual({ previous: { id: 1 }, wasChanged: true });
  });

  it('detect changes when `onChanged` is provided', () => {
    const onChanged = vi.fn();

    const { result, rerender } = render<number>(0, { onChanged });

    expect(result).toEqual({ previous: 0, wasChanged: false });
    expect(onChanged).not.toHaveBeenCalled();

    rerender(0);

    expect(result).toEqual({ previous: 0, wasChanged: false });
    expect(onChanged).not.toHaveBeenCalled();

    rerender(1);

    expect(result).toEqual({ previous: 0, wasChanged: true });
    expect(onChanged).toHaveBeenCalledTimes(1);
    expect(onChanged).toHaveBeenLastCalledWith(0, 1);

    rerender(1);

    expect(result).toEqual({ previous: 1, wasChanged: false });
    expect(onChanged).toHaveBeenCalledTimes(1);
    expect(onChanged).toHaveBeenLastCalledWith(0, 1);

    rerender(2);

    expect(result).toEqual({ previous: 1, wasChanged: true });
    expect(onChanged).toHaveBeenCalledTimes(2);
    expect(onChanged).toHaveBeenLastCalledWith(1, 2);
  });

  it('detect changes when `areEqual` and `onChanged` are provided', () => {
    const onChanged = vi.fn();
    const { result, rerender } = render({ id: 0 }, { areEqual, onChanged });

    expect(result).toEqual({ previous: { id: 0 }, wasChanged: false });
    expect(onChanged).not.toHaveBeenCalled();

    rerender({ id: 0 });

    expect(result).toEqual({ previous: { id: 0 }, wasChanged: false });
    expect(onChanged).not.toHaveBeenCalled();

    rerender({ id: 1 });

    expect(result).toEqual({ previous: { id: 0 }, wasChanged: true });
    expect(onChanged).toHaveBeenCalledTimes(1);
    expect(onChanged).toHaveBeenLastCalledWith({ id: 0 }, { id: 1 });

    rerender({ id: 1 });

    expect(result).toEqual({ previous: { id: 1 }, wasChanged: false });
    expect(onChanged).toHaveBeenCalledTimes(1);
    expect(onChanged).toHaveBeenLastCalledWith({ id: 0 }, { id: 1 });

    rerender({ id: 2 });

    expect(result).toEqual({ previous: { id: 1 }, wasChanged: true });
    expect(onChanged).toHaveBeenCalledTimes(2);
    expect(onChanged).toHaveBeenLastCalledWith({ id: 1 }, { id: 2 });
  });

  it('uses actual version of `areEqual', () => {
    const first = vi.fn((a, b) => a === b);
    const second = vi.fn((a, b) => a === b);

    const { rerender } = render(0, { areEqual: first });

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();

    rerender(0);

    expect(first).toHaveBeenCalledTimes(2);
    expect(second).not.toHaveBeenCalled();

    rerender(0, { areEqual: second });

    expect(first).toHaveBeenCalledTimes(2);
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('uses actual version of `onChanged`', () => {
    const first = vi.fn();
    const second = vi.fn();

    const { rerender } = render<number>(0, { onChanged: first });

    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();

    rerender(1);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();

    rerender(2);

    expect(first).toHaveBeenCalledTimes(2);
    expect(second).not.toHaveBeenCalled();

    rerender(3, { onChanged: second });

    expect(first).toHaveBeenCalledTimes(2);
    expect(second).toHaveBeenCalledTimes(1);
  });
});
