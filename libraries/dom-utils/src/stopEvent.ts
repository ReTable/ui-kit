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
