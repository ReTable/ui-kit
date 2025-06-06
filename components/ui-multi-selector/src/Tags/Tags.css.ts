import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import * as shared from '../shared.css';

export const state = styleVariants({
  isDisabled: {},
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      maxWidth: '100%',
      lineHeight: '0',

      selectors: {
        [`${shared.sizes.small} &`]: {
          padding: '4px',
        },

        [`${shared.sizes.medium} &`]: {
          padding: '8px',
        },

        [`${state.isDisabled}&`]: {
          padding: '0',
        },
      },
    },
  },
});

export const clear = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      selectors: {
        [`${shared.sizes.small} &`]: {
          top: '4px',
          right: '4px',
        },

        [`${shared.sizes.small}${shared.hasChevron} &`]: {
          right: '24px',
        },

        [`${shared.sizes.medium} &`]: {
          top: '10px',
          right: '8px',
        },

        [`${shared.sizes.medium}${shared.hasChevron} &`]: {
          right: '32px',
        },
      },
    },
  },
});

export const list = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexWrap: 'wrap',

      selectors: {
        [`${shared.sizes.small} &`]: {
          gap: '4px',
        },

        [`${shared.sizes.medium} &`]: {
          gap: '8px',
        },

        [`${shared.sizes.small} ${clear} + &`]: {
          maxWidth: 'calc(100% - 24px)',
        },

        [`${shared.sizes.small}${shared.hasChevron} ${clear} + &`]: {
          maxWidth: 'calc(100% - 44px)',
        },

        [`${shared.sizes.medium} ${clear} + &`]: {
          maxWidth: 'calc(100% - 32px)',
        },

        [`${shared.sizes.medium}${shared.hasChevron} ${clear} + &`]: {
          maxWidth: 'calc(100% - 56px)',
        },
      },
    },
  },
});

export const tag = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'inline-flex',
      maxWidth: '100%',

      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  },
});
