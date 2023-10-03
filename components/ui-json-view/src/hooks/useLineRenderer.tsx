import { useCallback } from 'react';

import { UiLine } from '../UiLine';
import { CollapsedKeys, Line, LineKind, LineRenderer } from '../types';

export function useLineRenderer(lines: Line[], collapsedKeys: CollapsedKeys): LineRenderer {
  return useCallback(
    ({ index, style }) => {
      const line = lines[index];

      const isCollapsed = line.kind === LineKind.Open && collapsedKeys.has(line.path);
      const isFirst = index === 0;
      const isLast = index === lines.length - 1;

      return (
        <UiLine
          key={line.path}
          isCollapsed={isCollapsed}
          isFirst={isFirst}
          isLast={isLast}
          line={line}
          style={style}
        />
      );
    },
    [lines, collapsedKeys],
  );
}
