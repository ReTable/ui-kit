import { randNumber } from '@ngneat/falso';
import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Size, useSize } from '~';

class ResizeObserverMock {
  public static readonly observe = vi.fn();

  public static readonly unobserve = vi.fn();

  private static callback: ResizeObserverCallback | null = null;

  public readonly observe = ResizeObserverMock.observe;

  public readonly unobserve = ResizeObserverMock.unobserve;

  public constructor(callback: ResizeObserverCallback) {
    ResizeObserverMock.callback = callback;
  }

  public static emit(...values: Array<[Element, Size]>) {
    const entries = values.map(
      ([target, contentRect]) => ({ target, contentRect }) as ResizeObserverEntry,
    );

    ResizeObserverMock.callback?.(entries, this as unknown as ResizeObserver);
  }
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

function createElement(size: Size): Element {
  return {
    getBoundingClientRect(): DOMRect {
      return size as DOMRect;
    },
  } as Element;
}

describe('useSize', () => {
  beforeEach(() => {
    ResizeObserverMock.observe.mockClear();
    ResizeObserverMock.unobserve.mockClear();
  });

  describe('default size', () => {
    it('equals to 0', () => {
      const { result } = renderHook(() => useSize());

      const [, size] = result.current;

      expect(size).toEqual({ height: 0, width: 0 });
    });

    it('equals to provided initial size', () => {
      const initialSize = {
        height: randNumber({ min: 10, max: 1000 }),
        width: randNumber({ min: 10, max: 1000 }),
      };
      const { result } = renderHook(() => useSize(initialSize));

      const [, size] = result.current;

      expect(size).toBe(initialSize);
    });
  });

  describe('initial mount', () => {
    it('updates size on initial mount', () => {
      const { result } = renderHook(() => useSize());

      const size: Size = { height: 100, width: 200 };

      act(() => {
        result.current[0](createElement(size));
      });

      expect(result.current[1]).toEqual(size);
    });

    it('rounds sizes', () => {
      const { result } = renderHook(() => useSize());

      const size: Size = { height: 100.1, width: 200.9 };

      act(() => {
        result.current[0](createElement(size));
      });

      expect(result.current[1]).toEqual({
        height: Math.round(size.height),
        width: Math.round(size.width),
      });
    });

    it("doesn't change size if it equals", () => {
      const { result } = renderHook(() => useSize());

      const beforeMount = result.current[1];

      act(() => {
        result.current[0](createElement({ ...beforeMount }));
      });

      expect(beforeMount).toBe(result.current[1]);

      act(() => {
        result.current[0](
          createElement({
            height: beforeMount.height + 0.1,
            width: beforeMount.width + 0.1,
          }),
        );
      });

      expect(beforeMount).toBe(result.current[1]);
    });

    it('updates size after mount another element', () => {
      const { result } = renderHook(() => useSize());

      const initialSize: Size = { height: 100, width: 200 };

      act(() => {
        result.current[0](createElement(initialSize));
      });

      expect(result.current[1]).toEqual(initialSize);

      const nextSize: Size = { height: 200, width: 400 };

      act(() => {
        result.current[0](createElement(nextSize));
      });

      expect(result.current[1]).toEqual(nextSize);
    });
  });

  describe('resize', () => {
    it('updates size after resize', () => {
      const { result } = renderHook(() => useSize());

      const initialSize: Size = { height: 100, width: 200 };

      const element = createElement(initialSize);

      act(() => {
        result.current[0](element);
      });

      expect(result.current[1]).toEqual(initialSize);

      let nextSize: Size = { height: 200, width: 400 };

      act(() => {
        ResizeObserverMock.emit([element, nextSize]);
      });

      expect(result.current[1]).toEqual(nextSize);

      nextSize = { height: 400, width: 800 };

      act(() => {
        ResizeObserverMock.emit([element, nextSize]);
      });

      expect(result.current[1]).toEqual(nextSize);
    });

    it('rounds sizes', () => {
      const { result } = renderHook(() => useSize());

      const initialSize: Size = { height: 100, width: 200 };

      const element = createElement(initialSize);

      act(() => {
        result.current[0](element);
      });

      expect(result.current[1]).toEqual(initialSize);

      const nextSize: Size = { height: 200.1, width: 400.9 };

      act(() => {
        ResizeObserverMock.emit([element, nextSize]);
      });

      expect(result.current[1]).toEqual({
        height: Math.round(nextSize.height),
        width: Math.round(nextSize.width),
      });
    });

    it("doesn't change size if it equals", () => {
      const { result } = renderHook(() => useSize());

      const initialSize: Size = { height: 100, width: 200 };

      const element = createElement(initialSize);

      act(() => {
        result.current[0](element);
      });

      expect(result.current[1]).toEqual(initialSize);

      const afterMount = result.current[1];

      act(() => {
        ResizeObserverMock.emit([element, { ...initialSize }]);
      });

      expect(result.current[1]).toBe(afterMount);

      act(() => {
        ResizeObserverMock.emit([
          element,
          {
            height: initialSize.height + 0.1,
            width: initialSize.width + 0.1,
          },
        ]);
      });

      expect(result.current[1]).toBe(afterMount);
    });

    it('ignores resize of initial element after change element', () => {
      const { result } = renderHook(() => useSize());

      const initialElement = createElement({ height: 100, width: 200 });

      act(() => {
        result.current[0](initialElement);
      });

      expect(result.current[1]).toEqual({
        height: 100,
        width: 200,
      });

      act(() => {
        ResizeObserverMock.emit([initialElement, { height: 200, width: 400 }]);
      });

      expect(result.current[1]).toEqual({
        height: 200,
        width: 400,
      });

      const nextElement = createElement({ height: 400, width: 800 });

      act(() => {
        result.current[0](nextElement);
      });

      expect(result.current[1]).toEqual({
        height: 400,
        width: 800,
      });

      act(() => {
        ResizeObserverMock.emit([initialElement, { height: 150, width: 300 }]);
      });

      expect(result.current[1]).toEqual({
        height: 400,
        width: 800,
      });

      act(() => {
        ResizeObserverMock.emit([nextElement, { height: 800, width: 1600 }]);
      });

      expect(result.current[1]).toEqual({
        height: 800,
        width: 1600,
      });
    });

    it('ignores resize of another element', () => {
      const { result } = renderHook(() => useSize());

      const targetElement = createElement({ height: 100, width: 200 });
      const anotherElement = createElement({ height: 200, width: 400 });

      act(() => {
        result.current[0](targetElement);
      });

      expect(result.current[1]).toEqual({ height: 100, width: 200 });

      act(() => {
        ResizeObserverMock.emit([
          anotherElement,
          {
            height: 400,
            width: 800,
          },
        ]);
      });

      expect(result.current[1]).toEqual({ height: 100, width: 200 });

      act(() => {
        ResizeObserverMock.emit(
          [
            targetElement,
            {
              height: 150,
              width: 300,
            },
          ],
          [
            anotherElement,
            {
              height: 400,
              width: 800,
            },
          ],
        );
      });

      expect(result.current[1]).toEqual({ height: 150, width: 300 });
    });

    it('supports multiple refs for the single element', () => {
      const initialSize = { height: 100, width: 200 };

      const element = createElement(initialSize);

      const { result: firstResult } = renderHook(() => useSize());
      const { result: secondResult } = renderHook(() => useSize());

      act(() => {
        firstResult.current[0](element);
        secondResult.current[0](element);
      });

      expect(firstResult.current[1]).toEqual(initialSize);
      expect(secondResult.current[1]).toEqual(initialSize);

      const nextSize = { height: 200, width: 400 };

      act(() => {
        ResizeObserverMock.emit([element, nextSize]);
      });

      expect(firstResult.current[1]).toEqual(nextSize);
      expect(secondResult.current[1]).toEqual(nextSize);
    });
  });
});
