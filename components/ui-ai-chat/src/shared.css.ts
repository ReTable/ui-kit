import { styleVariants } from '@vanilla-extract/css';

export const MIN_VISIBLE_ROWS_COUNT = 1;
export const MAX_VISIBLE_ROWS_COUNT = 10;

export const HEADER_HEIGHT = '32px';

export const variants = styleVariants({
  normal: {},
  condensed: {},
});
