import { useMemo } from 'react';

import { CollapsedKeys, Line, LineKind } from '../types';

function markPositions(lines: Line[]) {
  if (lines.length === 0) {
    return;
  }

  lines[0] = { ...lines[0], isFirst: true };

  const lastIndex = lines.length - 1;

  lines[lastIndex] = { ...lines[lastIndex], isLast: true };
}

export function useCollapsedLines(allLines: Line[], collapsedKeys: CollapsedKeys): Line[] {
  return useMemo(() => {
    if (collapsedKeys.isEmpty) {
      const lines = [...allLines];

      markPositions(lines);

      return lines;
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

        lines.push({ ...line, isCollapsed: true });
      } else {
        lines.push(line);
      }
    }

    markPositions(lines);

    return lines;
  }, [allLines, collapsedKeys]);
}
