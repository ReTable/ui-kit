import { useMemo } from 'react';

import { JsonValue, Line, LineKind } from '../../types';

import { enqueueItemsFrom } from './enqueueItemsFrom';
import { Item } from './types';

function parseJson(source: string): [true, JsonValue] | [false, null] {
  try {
    return [true, JSON.parse(source) as JsonValue];
  } catch {
    return [false, null];
  }
}

export function useLines(source: string): Line[] {
  return useMemo(() => {
    // Step 1: Try to convert source value to the object.
    const [isJson, sourceValue] = parseJson(source);

    if (!isJson) {
      return [
        {
          level: 0,
          path: '0',
          placeholder: 'Invalid JSON',
          kind: LineKind.Placeholder,
        },
      ];
    }

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
  }, [source]);
}
