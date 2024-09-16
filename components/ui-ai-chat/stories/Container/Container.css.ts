import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('.sb-show-main.sb-main-padded', {
  padding: '0',
});

globalStyle('#storybook-root', {
  height: '100%',
  minHeight: '100%',
});

export const root = style({
  height: '100%',
  width: '350px',
});
