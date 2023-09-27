import { useMemo } from 'react';

import { Line, isOpenLine } from '../toLines';
import { CollapsedKeys } from '../types';

export function useCollapsedLines(allLines: Line[], collapsedKeys: CollapsedKeys): Line[] {
  return useMemo(() => {
    if (collapsedKeys.isEmpty) {
      return allLines;
    }

    const lines: Line[] = [];

    let skip: null | string = null;

    for (const line of allLines) {
      if (skip != null) {
        if (line.key.startsWith(skip)) {
          continue;
        } else {
          skip = null;
        }
      }

      if (isOpenLine(line) && collapsedKeys.has(line.key)) {
        skip = `${line.key}.`;
      }

      lines.push(line);
    }

    return lines;
  }, [allLines, collapsedKeys]);
}
