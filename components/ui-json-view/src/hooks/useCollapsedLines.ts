import { useMemo } from 'react';

import { CollapsedKeys, Line, LineKind } from '../types';

export function useCollapsedLines(allLines: Line[], collapsedKeys: CollapsedKeys): Line[] {
  return useMemo(() => {
    if (collapsedKeys.isEmpty) {
      return allLines;
    }

    const lines: Line[] = [];

    let skip: null | string = null;

    for (const line of allLines) {
      if (skip != null) {
        if (line.path.startsWith(skip)) {
          continue;
        } else {
          skip = null;
        }
      }

      if (line.kind === LineKind.Open && collapsedKeys.has(line.path)) {
        skip = `${line.path}.`;
      }

      lines.push(line);
    }

    return lines;
  }, [allLines, collapsedKeys]);
}
