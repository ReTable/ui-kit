import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import * as shared from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      maxWidth: '100%',

      lineHeight: '0',

      selectors: {
        [`${shared.sizes.small} &`]: {
          padding: '4px',
        },

        [`${shared.sizes.medium} &`]: {
          padding: '0 0 8px 0',
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

export const tag = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'inline-flex',

      selectors: {
        [`${shared.sizes.small} &`]: {
          marginTop: '4px',
          marginLeft: '4px',
        },

        [`${shared.sizes.medium} &`]: {
          marginTop: '8px',
          marginLeft: '8px',
        },

        [`${isDisabled} &`]: {
          margin: '0',
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
          margin: '4px 4px 0 4px',
        },

        [`${shared.sizes.small}${shared.hasChevron} &`]: {
          marginRight: '26px',
        },

        [`${shared.sizes.medium} &`]: {
          margin: '8px 8px 0 8px',
        },

        [`${shared.sizes.medium}${shared.hasChevron} &`]: {
          marginRight: '30px',
        },
      },
    },
  },
});

export const label = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '0',
      left: '0',

      width: '100%',
      height: '100%',

      backgroundColor: 'transparent',
    },
  },
});
