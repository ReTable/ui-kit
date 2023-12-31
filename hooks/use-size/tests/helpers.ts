import { randNumber } from '@ngneat/falso';
import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { Size, useSize } from '~';

// region requestAnimationFrame

let job: (() => void) | null = null;

function requestAnimationFrame(callback: () => void) {
  job = callback;
}

vi.stubGlobal('requestAnimationFrame', requestAnimationFrame);

function flushAnimationFrame() {
  job?.();

  job = null;
}

export function triggerAnimationFrame(withAct = true): void {
  if (withAct) {
    act(() => {
      flushAnimationFrame();
    });
  } else {
    flushAnimationFrame();
  }
}

// endregion

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

export function resize(trigger: boolean, ...values: Array<[Element, Size]>): void {
  act(() => {
    const entries = values.map(
      ([target, contentRect]) => ({ target, contentRect }) as ResizeObserverEntry,
    );

    ResizeObserverMock.callback?.(entries, null as unknown as ResizeObserver);

    if (trigger) {
      triggerAnimationFrame(false);
    }
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
  target: Element | null;

  mount: (element: Element | Size | null) => void;
};

export function createView(initialSize?: Size): View {
  const { result } = renderHook(() => useSize(initialSize));

  return {
    get size() {
      return result.current[1];
    },

    get target() {
      return result.current[2];
    },

    mount(elementOrSize: Element | Size | null) {
      if (elementOrSize == null) {
        result.current[0](elementOrSize);
      } else if ('getBoundingClientRect' in elementOrSize) {
        result.current[0](elementOrSize);
      } else {
        result.current[0](createElement(elementOrSize));
      }
    },
  };
}

export function mount(...targets: Array<[View, Element | Size | null]>): void {
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
