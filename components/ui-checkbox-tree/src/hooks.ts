import { CSSProperties, useMemo } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { levelVar } from './style.css';

export function useItemStyle(level: number): CSSProperties {
  return useMemo(
    () =>
      assignInlineVars({
        [levelVar]: level.toString(),
      }),
    [level],
  );
}
