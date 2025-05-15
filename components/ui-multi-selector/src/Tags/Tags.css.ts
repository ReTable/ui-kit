import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import * as shared from '../shared.css';

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

        '&::after': {
          content: '',
          display: 'block',
          clear: 'both',
        },
      },
    },
  },
});

export const isDisabled = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '0',

      selectors: {
        [`${shared.sizes.small} &`]: {
          gap: '4px',
        },

        [`${shared.sizes.medium} &`]: {
          gap: '8px',
        },
      },
    },
  },
});

export const clear = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      float: 'right',

      selectors: {
        [`${shared.sizes.small} &`]: {
          margin: '0 4px',
        },

        [`${shared.sizes.small}${shared.hasChevron} &`]: {
          marginRight: '26px',
        },

        [`${shared.sizes.medium} &`]: {
          margin: '0 8px',
        },

        [`${shared.sizes.medium}${shared.hasChevron} &`]: {
          marginRight: '30px',
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
      },
    },
  },
});

export const tag = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'inline-flex',

      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',

      selectors: {
        [`${shared.sizes.small} &`]: {
          maxWidth: 'calc(100% - 8px)',
        },

        [`${shared.sizes.small} ${clear} + &`]: {
          maxWidth: 'calc(100% - 32px)',
        },

        [`${shared.sizes.medium} &`]: {
          maxWidth: 'calc(100% - 16px)',
        },

        [`${shared.sizes.medium} ${clear} + &`]: {
          maxWidth: 'calc(100% - 48px)',
        },

        [`${isDisabled} &`]: {
          margin: '0',
        },
      },
    },
  },
});
