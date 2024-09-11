import { MouseEvent } from 'react';

export function isButtonTarget(event: MouseEvent | globalThis.MouseEvent): boolean {
  if (!(event.target instanceof Element)) {
    throw new TypeError('Target must be an Element');
  }

  let current: Element | null = event.target;

  while (current !== event.currentTarget) {
    if (current == null) {
      return false;
    }

    if (current.tagName === 'BUTTON') {
      return true;
    }

    current = current.parentElement;
  }

  return false;
}
