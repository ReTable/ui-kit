import { useCallback } from 'react';

import { UiLine } from '../UiLine';
import { CollapsedKeys, Line, LineKind, LineRenderer } from '../types';

export function useLineRenderer(lines: Line[], collapsedKeys: CollapsedKeys): LineRenderer {
  return useCallback((index) => {
    const line = lines[index];

    const isCollapsed = line.kind === LineKind.Open && collapsedKeys.has(line.path);

    return <UiLine key={line.path} isCollapsed={isCollapsed} line={line} />;
  });
}
