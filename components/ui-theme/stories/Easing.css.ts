import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  duration: '1s',
  height: '400px',
  timingFunction: 'cubic-bezier(0.2, 0, 0.38, 0.9)',
});

export const root = style([
  themeClass,
  {
    position: 'relative',
    width: 'fit-content',

    selectors: {
      '&:before': {
        content: '',
        position: 'absolute',
        top: '-5px',
        right: '-12px',
        display: 'block',
        width: '10px',
        height: '10px',
        borderRadius: '0 50% 50% 50%',
        background: '#127ff9',
        transform: 'translateY(0) rotate(-45deg)',
      },

      '&:hover:before': {
        transitionDuration: vars.duration,
        transitionTimingFunction: vars.timingFunction,
        transform: `translateY(${vars.height}) rotate(-45deg)`,
      },
    },
  },
]);

export const bezierRoot = style({
  display: 'block',
  backgroundColor: '#f8f8f8',
});

export const grid = style({
  fill: 'transparent',
  stroke: 'rgba(0, 0, 0, 0.1)',
});

export const curve = style({
  fill: 'transparent',
  stroke: '#127ff9',
  strokeWidth: 2,
});
