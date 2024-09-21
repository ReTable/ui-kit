import { globalStyle, styleVariants } from '@vanilla-extract/css';

globalStyle('.sb-show-main.sb-main-padded', {
  padding: '0',
});

globalStyle('#storybook-root', {
  height: '100%',
  minHeight: '100%',
});

export const variants = styleVariants({
  condensed: {
    height: '100%',
    width: '350px',

    marginLeft: 'auto',

    borderLeft: '1px solid #eee',
  },

  normal: {
    height: '100%',
    width: '100%',
  },
});
