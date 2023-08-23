import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  style,
} from '@vanilla-extract/css';
import { paramCase } from 'change-case';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const gradients = createGlobalThemeContract(
  {
    addGPTColumn: {
      l: {
        primary: 'primary',
        secondary: 'secondary',
      },
      m: {
        primary: 'primary',
        secondary: 'secondary',
      },
    },
    gptNode: {
      l: {
        primary: 'primary',
        secondary: 'secondary',
      },
      m: {
        primary: {
          ['1']: 'primary-1',
          ['2']: 'primary-2',
        },
        secondary: 'secondary',
      },
    },
  },
  (_, path) => {
    const gradientName = path.map((it) => paramCase(it)).join('-');

    return `tbl--ui-node-icon--${gradientName}`;
  },
);

createGlobalTheme(':root', gradients, {
  addGPTColumn: {
    l: {
      primary: 'url(#tbl--ui-node-icon--add-gpt-column-l--primary)',
      secondary: 'url(#tbl--ui-node-icon--add-gpt-column-l--secondary)',
    },
    m: {
      primary: 'url(#tbl--ui-node-icon--add-gpt-column-m--primary)',
      secondary: 'url(#tbl--ui-node-icon--add-gpt-column-m--secondary)',
    },
  },
  gptNode: {
    l: {
      primary: 'url(#tbl--ui-node-icon--gpt-node-l--primary)',
      secondary: 'url(#tbl--ui-node-icon--gpt-node-l--secondary)',
    },
    m: {
      primary: {
        ['1']: 'url(#tbl--ui-node-icon--gpt-node-m--primary-1)',
        ['2']: 'url(#tbl--ui-node-icon--gpt-node-m--primary-2)',
      },
      secondary: 'url(#tbl--ui-node-icon--gpt-node-m--secondary)',
    },
  },
});

const overrides = {
  ...assignVars(uiTheme.colors.brand, {
    postgres: uiTheme.colors.icons.disabled.primary,
    snowflake: uiTheme.colors.icons.disabled.primary,
  }),
  ...assignVars(uiTheme.colors.icons.clean, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.group, {
    clean: uiTheme.colors.icons.disabled.secondary,
    transformation: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.misc, {
    folder: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.output, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.source, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.transformation, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
    tertiary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(gradients, {
    addGPTColumn: {
      l: {
        primary: 'url(#tbl--ui-node-icon--add-gpt-column-l--primary-disabled)',
        secondary: 'url(#tbl--ui-node-icon--add-gpt-column-l--secondary-disabled)',
      },
      m: {
        primary: 'url(#tbl--ui-node-icon--add-gpt-column-m--primary-disabled)',
        secondary: 'url(#tbl--ui-node-icon--add-gpt-column-m--secondary-disabled)',
      },
    },
    gptNode: {
      l: {
        primary: 'url(#tbl--ui-node-icon--gpt-node-l--primary-disabled)',
        secondary: 'url(#tbl--ui-node-icon--gpt-node-l--secondary-disabled)',
      },
      m: {
        primary: {
          ['1']: 'url(#tbl--ui-node-icon--gpt-node-m--primary-1-disabled)',
          ['2']: 'url(#tbl--ui-node-icon--gpt-node-m--primary-2-disabled)',
        },
        secondary: 'url(#tbl--ui-node-icon--gpt-node-m--secondary-disabled)',
      },
    },
  }),
};

export const disabled = style({});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`:disabled &, &${disabled}`]: {
          vars: overrides,
        },
      },
    },
  },
});
