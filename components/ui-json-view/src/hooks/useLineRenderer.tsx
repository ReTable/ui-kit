import { useCallback } from 'react';

import { UiLine } from '../UiLine';
import { Line, LineRenderer } from '../types';

export function useLineRenderer(lines: Line[]): LineRenderer {
  return useCallback(
    ({ index, style }) => {
      const line = lines[index];

      return <UiLine key={line.path} line={line} style={style} />;
    },
    [lines],
  );
}
