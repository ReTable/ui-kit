import { useMemo } from 'react';

import { JsonValue, Line, LineKind } from '../../../types';

import { enqueueItemsFrom } from './enqueueItemsFrom';
import { Item } from './types';

export function useLines(value: JsonValue, isValid: boolean, maxNumberOfLines: number): Line[] {
  return useMemo(() => {
    // Step 1: If source value isn't valid JSON value, then return placeholder.
    if (!isValid) {
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

      value,
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

      if (lines.length === maxNumberOfLines) {
        lines.push({
          kind: LineKind.Placeholder,

          level: 0,
          path: `more`,

          placeholder: '...',
        });

        break;
      }

      // Step 4.3: Move to the next item in queue.
      cursor = cursor.next;
    }

    // Step 5: Return a result.
    return lines;
  }, [value, isValid, maxNumberOfLines]);
}
