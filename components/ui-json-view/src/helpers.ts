import { CSSProperties } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { levelVar } from './style.css';

import { Line } from './types';

export function levelOf({ level }: Line): CSSProperties {
  return assignInlineVars({ [levelVar]: `${level}` });
}
