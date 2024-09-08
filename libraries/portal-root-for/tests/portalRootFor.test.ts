import { beforeEach, describe, expect, it } from 'vitest';

import { portalRootFor } from '../src';

describe('portalRootFor', () => {
  let id = '';
  let className = '';

  const findRoot = () => document.body.querySelector(`#${id}`);

  beforeEach(() => {
    const timestamp = new Date().getDate();

    id = `portal-${timestamp}`;
    className = `class-${timestamp}`;
  });

  describe('when root not exists', () => {
    it('creates a new element', () => {
      expect(findRoot()).toBeNull();

      const root = portalRootFor({ id });

      expect(root).not.toBeNull();
      expect(findRoot()).toBe(root);
    });

    it('sets a class if given', () => {
      const root = portalRootFor({ id, className });

      expect(root).toHaveClass(className);
    });
  });

  describe('when root is exists', () => {
    let initialClassName = '';
    let existing: HTMLElement = document.createElement('div');

    beforeEach(() => {
      const timestamp = new Date().getDate();

      initialClassName = `initial-class-${timestamp}`;
      existing = portalRootFor({ id, className: initialClassName });
    });

    it('returns an existing element', () => {
      const root = portalRootFor({ id });

      expect(root).toBe(existing);
    });

    it('sets a class if given', () => {
      const root = portalRootFor({ id, className });

      expect(root).toHaveClass(className);
    });
  });
});
