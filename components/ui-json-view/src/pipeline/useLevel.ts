import { CSSProperties, useMemo } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { indentVar } from './style.css';

export function useLevel(level: number): CSSProperties {
  return useMemo(() => assignInlineVars({ [indentVar]: `${level}` }), [level]);
}
