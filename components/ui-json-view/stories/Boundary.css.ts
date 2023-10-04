import { createVar, fallbackVar, style } from '@vanilla-extract/css';

export const height = createVar();

export const width = createVar();

export const root = style({
  width: fallbackVar(width, 'auto'),
  height: fallbackVar(height, 'auto'),

  border: '1px solid #909090',
});
