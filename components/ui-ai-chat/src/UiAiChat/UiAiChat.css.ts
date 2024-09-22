import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { container } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      containerName: container,
      containerType: 'inline-size',

      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'auto',
    },
  },
});

export const conversation = style({
  '@layer': {
    [uiLayers.components]: {
      flexGrow: '1',
    },
  },
});
