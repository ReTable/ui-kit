import { JsonValue } from '../types';

import { enqueueItemsFrom } from './enqueueItemsFrom';
import { Item, Line } from './types';

export function toLines(source: string): Line[] {
  // Step 1: Try to convert source value to the object.
  const sourceValue = JSON.parse(source) as JsonValue;

  // Step 2: Create an initial value and make it cursor.
  let cursor: Item | undefined = {
    isLine: false,

    jsonPath: ['$'],
    level: 0,
    path: '0',

    value: sourceValue,
  };

  // Step 3: Create lines container.
  const lines: Line[] = [];

  // Step 4: Iterate over the queue.
  while (cursor != null) {
    if (cursor.isLine) {
      // Step 4.1: If item is already contains a line, then push line to result.
      lines.push(cursor.line);
    } else {
      // Step 4.2: Otherwise, insert new items to the queue.
      enqueueItemsFrom(cursor);
    }

    // Step 4.3: Move to the next item in queue.
    cursor = cursor.next;
  }

  // Step 5: Return a result.
  return lines;
}
