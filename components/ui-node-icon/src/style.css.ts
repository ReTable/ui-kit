import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  style,
} from '@vanilla-extract/css';
import { kebabCase } from 'change-case';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

// region Gradients

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
    tabulaDrive: {
      l: {
        primary: {
          ['1']: 'primary-1',
          ['2']: 'primary-2',
        },
      },
      m: {
        primary: {
          ['1']: 'primary-1',
          ['2']: 'primary-2',
        },
      },
    },
  },
  (_, path) => {
    const gradientName = path.map((it) => kebabCase(it)).join('-');

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
  tabulaDrive: {
    l: {
      primary: {
        ['1']: 'url(#tbl--ui-node-icon--tabula-drive-l--primary-1)',
        ['2']: 'url(#tbl--ui-node-icon--tabula-drive-l--primary-2)',
      },
    },
    m: {
      primary: {
        ['1']: 'url(#tbl--ui-node-icon--tabula-drive-m--primary-1)',
        ['2']: 'url(#tbl--ui-node-icon--tabula-drive-m--primary-2)',
      },
    },
  },
});

// endregion gradients

// region Enrichments colors

export const enrichments = createGlobalThemeContract(
  {
    apollo: {
      primary: 'primary',
      secondary: 'secondary',
    },
    bouncer: {
      primary: 'primary',
      secondary: 'secondary',
    },
    clearbit: {
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tTertiary',
    },
    contactOut: {
      l: 'l',
      m: 'm',
      s: 's',
    },
    discoLike: 'discoLike',
    findymail: {
      primary: 'primary',
      secondary: 'secondary',
    },
    firecrawl: {
      l: 'l',
      m: 'm',
      s: 's',
    },
    hunter: {
      primary: 'primary',
      secondary: 'secondary',
    },
    lead411: {
      primary: 'primary',
      secondary: 'secondary',
    },
    leadMagic: {
      primary: 'primary',
      secondary: 'secondary',
    },
    leadReach: {
      primary: 'primary',
      secondary: 'secondary',
    },
    millionVerifier: {
      primary: 'primary',
      gradient: {
        from: 'from',
        to: 'to',
      },
    },
    peopleDataLabs: 'peopleDataLabs',
    predictLeads: 'predictLeads',
    prospeo: {
      primary: 'primary',
      secondary: 'secondary',
    },
    reverseContact: {
      lGradient: {
        one: 'one',
        two: 'two',
        three: 'three',
        four: 'four',
      },
      mGradient: {
        one: 'one',
        two: 'two',
        three: 'three',
        four: 'four',
      },
      sGradient: {
        one: 'one',
        two: 'two',
        three: 'three',
        four: 'four',
      },
    },
    signalHire: {
      primary: 'primary',
      secondary: 'secondary',
    },
    upLead: 'upLead',
    zeroBounce: {
      primary: 'primary',
      secondary: 'secondary',
    },
    zoomInfo: {
      primary: 'primary',
      secondary: 'secondary',
    },
  },
  (_, path) => {
    const gradientName = path.map((it) => kebabCase(it)).join('-');

    return `tbl--ui-node-icon--enrichment--${gradientName}`;
  },
);

createGlobalTheme(':root', enrichments, {
  apollo: {
    primary: '#010202',
    secondary: '#fcc02b',
  },
  bouncer: {
    primary: '#2a2964',
    secondary: '#1Aac78',
  },
  clearbit: {
    primary: '#1ba2fe',
    secondary: '#5ebafd',
    tertiary: '#d2e9fc',
  },
  contactOut: {
    l: '',
    m: '',
    s: '',
  },
  discoLike: '#000',
  findymail: {
    primary: '#e3243b',
    secondary: '#000000',
  },
  firecrawl: {
    l: '',
    m: '',
    s: '',
  },
  hunter: {
    primary: '#fa5320',
    secondary: '#ffffff',
  },
  lead411: {
    primary: '#5e5e5e',
    secondary: '#5183b0',
  },
  leadMagic: {
    primary: '#473bf0',
    secondary: '#ffffff',
  },
  leadReach: {
    primary: '#ffffff',
    secondary: '#000000',
  },
  millionVerifier: {
    primary: '#0c1516',
    gradient: {
      from: '#20cc95',
      to: '#205ccc',
    },
  },
  peopleDataLabs: '#7f35fd',
  predictLeads: '#76508e',
  prospeo: {
    primary: '#f44238',
    secondary: '#ffffff',
  },
  reverseContact: {
    lGradient: {
      one: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-1)',
      two: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-2)',
      three: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-3)',
      four: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-4)',
    },
    mGradient: {
      one: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-1)',
      two: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-2)',
      three: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-3)',
      four: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-4)',
    },
    sGradient: {
      one: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-1)',
      two: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-2)',
      three: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-3)',
      four: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-4)',
    },
  },
  signalHire: {
    primary: '#000000',
    secondary: '#478acc',
  },
  upLead: '#5e707d',
  zeroBounce: {
    primary: '#000000',
    secondary: '#f0e711',
  },
  zoomInfo: {
    primary: '#ffffff',
    secondary: '#f44238',
  },
});

// endregion enrichments

// region Overrides

const overrides = {
  ...assignVars(uiTheme.colors.brand, {
    postgres: uiTheme.colors.icons.disabled.primary,
    salesforce: uiTheme.colors.icons.disabled.primary,
    snowflake: uiTheme.colors.icons.disabled.primary,
    tabulaDrive: uiTheme.colors.icons.disabled.secondary,
    tomatDrive: uiTheme.colors.icons.disabled.primary,
  }),
  ...assignVars(uiTheme.colors.icons.clean, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.enrich, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
    tertiary: uiTheme.colors.icons.disabled.secondary,
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
  ...assignVars(uiTheme.colors.icons.tomat, {
    primary: uiTheme.colors.content.contrast,
    secondary: uiTheme.colors.content.contrast,
  }),
  ...assignVars(uiTheme.colors.icons.transformation, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
    tertiary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(gradients, {
    addGPTColumn: {
      l: {
        primary: uiTheme.colors.icons.disabled.primary,
        secondary: uiTheme.colors.icons.disabled.secondary,
      },
      m: {
        primary: uiTheme.colors.icons.disabled.primary,
        secondary: uiTheme.colors.icons.disabled.secondary,
      },
    },
    gptNode: {
      l: {
        primary: uiTheme.colors.icons.disabled.primary,
        secondary: uiTheme.colors.icons.disabled.secondary,
      },
      m: {
        primary: {
          ['1']: uiTheme.colors.icons.disabled.primary,
          ['2']: uiTheme.colors.icons.disabled.primary,
        },
        secondary: uiTheme.colors.icons.disabled.secondary,
      },
    },
    tabulaDrive: {
      l: {
        primary: {
          ['1']: uiTheme.colors.icons.disabled.primary,
          ['2']: uiTheme.colors.icons.disabled.primary,
        },
      },
      m: {
        primary: {
          ['1']: uiTheme.colors.icons.disabled.primary,
          ['2']: uiTheme.colors.icons.disabled.primary,
        },
      },
    },
  }),
  ...assignVars(enrichments, {
    apollo: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    bouncer: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    clearbit: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: '#d9d9d9',
      tertiary: uiTheme.colors.icons.disabled.secondary,
    },
    contactOut: {
      l: 'url(#tbl--ui-node-icon--enrichment--contact-out-l--disabled)',
      m: 'url(#tbl--ui-node-icon--enrichment--contact-out-m--disabled)',
      s: 'url(#tbl--ui-node-icon--enrichment--contact-out-s--disabled)',
    },
    discoLike: uiTheme.colors.icons.disabled.primary,
    findymail: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.primary,
    },
    firecrawl: {
      l: 'url(#tbl--ui-node-icon--enrichment--firecrawl-l--disabled)',
      m: 'url(#tbl--ui-node-icon--enrichment--firecrawl-m--disabled)',
      s: 'url(#tbl--ui-node-icon--enrichment--firecrawl-s--disabled)',
    },
    hunter: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    lead411: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    leadMagic: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    leadReach: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    millionVerifier: {
      primary: uiTheme.colors.icons.disabled.primary,
      gradient: {
        from: uiTheme.colors.icons.disabled.secondary,
        to: uiTheme.colors.icons.disabled.secondary,
      },
    },
    peopleDataLabs: uiTheme.colors.icons.disabled.primary,
    predictLeads: uiTheme.colors.icons.disabled.primary,
    prospeo: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    reverseContact: {
      lGradient: {
        one: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-disabled)',
        two: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-disabled)',
        three: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-disabled)',
        four: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-l--gradient-disabled)',
      },
      mGradient: {
        one: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-disabled)',
        two: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-disabled)',
        three: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-disabled)',
        four: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-m--gradient-disabled)',
      },
      sGradient: {
        one: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-disabled)',
        two: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-disabled)',
        three: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-disabled)',
        four: 'url(#tbl--ui-node-icon--enrichment--reverse-contact-s--gradient-disabled)',
      },
    },
    signalHire: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    upLead: uiTheme.colors.icons.disabled.primary,
    zeroBounce: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    zoomInfo: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
  }),
};

// endregion Overrides

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
