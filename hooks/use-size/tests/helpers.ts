import { randNumber } from '@ngneat/falso';
import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { Size, useSize } from '~';

// region ResizeObserver

class ResizeObserverMock {
  public static readonly observe = vi.fn();

  public static readonly unobserve = vi.fn();

  public static callback: ResizeObserverCallback | null = null;

  public readonly observe = ResizeObserverMock.observe;

  public readonly unobserve = ResizeObserverMock.unobserve;

  public constructor(callback: ResizeObserverCallback) {
    ResizeObserverMock.callback = callback;
  }
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

export function resize(...values: Array<[Element, Size]>): void {
  act(() => {
    const entries = values.map(
      ([target, contentRect]) => ({ target, contentRect }) as ResizeObserverEntry,
    );

    ResizeObserverMock.callback?.(entries, null as unknown as ResizeObserver);
  });
}

// endregion

// region Factories

export function createDimension(delta = 0): number {
  return randNumber({ min: 10, max: 1000 }) + delta;
}

export function createSize(width?: number, height?: number): Size {
  return {
    height: height ?? createDimension(),
    width: width ?? createDimension(),
  };
}

export function createElement(size: Size): Element {
  return {
    getBoundingClientRect(): DOMRect {
      return size as DOMRect;
    },
  } as Element;
}

// endregion

// region View

type View = {
  size: Size;

  mount: (element: Element | Size) => void;
};

export function createView(initialSize?: Size): View {
  const { result } = renderHook(() => useSize(initialSize));

  return {
    get size() {
      return result.current[1];
    },

    mount(elementOrSize: Element | Size) {
      if ('getBoundingClientRect' in elementOrSize) {
        result.current[0](elementOrSize);
      } else {
        result.current[0](createElement(elementOrSize));
      }
    },
  };
}

export function mount(...targets: Array<[View, Element | Size]>): void {
  act(() => {
    for (const [view, elementOrSize] of targets) {
      view.mount(elementOrSize);
    }
  });
}

// endregion

// region Miscellaneous

export function roundSize(size: Size): Size {
  return {
    height: Math.round(size.height),
    width: Math.round(size.width),
  };
}

// endregion
