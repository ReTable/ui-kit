import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { containerQuery } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '16px',
      overflowY: 'auto',
      maskImage: [
        'linear-gradient(to top, black, black)',
        'linear-gradient(to top, black, black)',
        'linear-gradient(to top, transparent 0, black 16px, black 100%)',
      ].join(', '),
      maskSize: '16px 100%, 16px 100%, calc(100% - 16px) 100%',
      maskPosition: 'center left, center right, bottom center',
      maskRepeat: 'no-repeat',

      '@container': {
        [containerQuery]: {
          maskImage: [
            'linear-gradient(to top, black, black)',
            'linear-gradient(to top, black, black)',
            'linear-gradient(to top, transparent 0, black 16px, black 100%)',
          ].join(', '),
          maskSize: '52px 100%, 52px 100%, calc(100% - 52px) 100%',
        },
      },
    },
  },
});

export const placeholder = style({
  '@layer': {
    [uiLayers.components]: {
      height: '100%',
    },
  },
});

export const requests = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      minHeight: '100%',

      '@container': {
        [containerQuery]: {
          maxWidth: '1104px',
          margin: '0 auto',
          padding: '0 52px 0 52px',
        },
      },
    },
  },
});
