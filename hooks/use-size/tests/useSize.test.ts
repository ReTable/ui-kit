import { describe, expect, it } from 'vitest';

import {
  createDimension,
  createElement,
  createSize,
  createView,
  mount,
  resize,
  roundSize,
  triggerAnimationFrame,
} from './helpers';

describe('useSize', () => {
  describe('default size', () => {
    it('equals to 0', () => {
      const view = createView();

      expect(view.size).toEqual({ height: 0, width: 0 });
    });

    it('equals to provided initial size', () => {
      const initialSize = createSize();

      const view = createView(initialSize);

      expect(view.size).toBe(initialSize);
    });
  });

  describe('initial mount', () => {
    it('updates size on initial mount', () => {
      const view = createView();

      const size = createSize();

      mount([view, size]);

      expect(view.size).toEqual(size);
    });

    it('rounds sizes', () => {
      const view = createView();

      const size = {
        height: createDimension(0.1),
        width: createDimension(0.9),
      };

      mount([view, size]);

      expect(view.size).toEqual(roundSize(size));
    });

    it("doesn't change size if it equals", () => {
      const view = createView();

      const initialSize = view.size;

      mount([view, { ...initialSize }]);

      expect(view.size).toBe(initialSize);

      mount([view, { height: initialSize.height + 0.1, width: initialSize.width + 0.1 }]);

      expect(view.size).toBe(initialSize);
    });

    it('updates size after mount another element', () => {
      const view = createView();

      const initialSize = createSize();

      mount([view, initialSize]);

      expect(view.size).toEqual(initialSize);

      const nextSize = createSize();

      mount([view, nextSize]);

      expect(view.size).toEqual(nextSize);
    });
  });

  describe('resize', () => {
    it('updates size after resize', () => {
      const view = createView();

      const initialSize = createSize();

      const element = createElement(initialSize);

      mount([view, element]);

      expect(view.size).toEqual(initialSize);

      let nextSize = createSize();

      resize(true, [element, nextSize]);

      expect(view.size).toEqual(nextSize);

      nextSize = createSize();

      resize(true, [element, nextSize]);

      expect(view.size).toEqual(nextSize);
    });

    it('rounds sizes', () => {
      const view = createView();

      const initialSize = createSize();

      const element = createElement(initialSize);

      mount([view, element]);

      expect(view.size).toEqual(initialSize);

      const nextSize = {
        height: createDimension(0.1),
        width: createDimension(0.9),
      };

      resize(true, [element, nextSize]);

      expect(view.size).toEqual(roundSize(nextSize));
    });

    it("doesn't change size if it equals", () => {
      const view = createView();

      const initialSize = createSize();

      const element = createElement(initialSize);

      mount([view, element]);

      expect(view.size).toEqual(initialSize);

      const nextSize = view.size;

      resize(true, [element, { ...initialSize }]);

      expect(view.size).toBe(nextSize);

      resize(true, [
        element,
        {
          height: initialSize.height + 0.1,
          width: initialSize.width + 0.1,
        },
      ]);

      expect(view.size).toBe(nextSize);
    });

    it('ignores resize of initial element after change element', () => {
      const view = createView();

      const initialSize = createSize();

      const initialElement = createElement(initialSize);

      mount([view, initialElement]);

      expect(view.size).toEqual(initialSize);

      let nextSize = createSize();

      resize(true, [initialElement, nextSize]);

      expect(view.size).toEqual(nextSize);

      nextSize = createSize();

      const nextElement = createElement(nextSize);

      mount([view, nextElement]);

      expect(view.size).toEqual(nextSize);

      resize(true, [initialElement, createSize()]);

      expect(view.size).toEqual(nextSize);

      nextSize = createSize();

      resize(true, [nextElement, nextSize]);

      expect(view.size).toEqual(nextSize);
    });

    it('ignores resize of another element', () => {
      const view = createView();

      const targetSize = createSize();
      const anotherSize = createSize();

      const targetElement = createElement(targetSize);
      const anotherElement = createElement(anotherSize);

      mount([view, targetElement]);

      expect(view.size).toEqual(targetSize);

      const nextSize = createSize();

      resize(true, [anotherElement, nextSize]);

      expect(view.size).toEqual(targetSize);

      resize(true, [targetElement, nextSize], [anotherElement, createSize()]);

      expect(view.size).toEqual(nextSize);
    });

    it('supports multiple refs for the single element', () => {
      const firstView = createView();
      const secondView = createView();

      const initialSize = createSize();

      const element = createElement(initialSize);

      mount([firstView, element], [secondView, element]);

      expect(firstView.size).toEqual(initialSize);
      expect(secondView.size).toEqual(initialSize);

      const nextSize = createSize();

      resize(true, [element, nextSize]);

      expect(firstView.size).toEqual(nextSize);
      expect(secondView.size).toEqual(nextSize);
    });

    it("supports 'requestAnimationFrame'", () => {
      const view = createView();

      const initialSize = createSize();

      const element = createElement(initialSize);

      mount([view, element]);

      expect(view.size).toEqual(initialSize);

      const firstSize = createSize();

      resize(false, [element, firstSize]);

      const secondSize = createSize();

      resize(false, [element, secondSize]);

      triggerAnimationFrame();

      expect(view.size).toEqual(secondSize);
    });
  });
});
