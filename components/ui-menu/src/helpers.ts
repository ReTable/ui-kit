import { MouseEvent } from 'react';

export function stopEvent(event: MouseEvent<HTMLElement>): void {
  const options = event.currentTarget.dataset;

  if (options.stopPropagation) {
    event.stopPropagation();
  }

  if (options.preventDefault) {
    event.preventDefault();
  }
}

export function isClickByButton(event: MouseEvent | globalThis.MouseEvent): boolean {
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
