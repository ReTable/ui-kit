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
    addGptColumn: {
      l: 'l',
      m: 'm',
    },
    apiSearch: {
      l: 'l',
      m: 'm',
    },
    enrichmentAll: {
      l: 'l',
      m: 'm',
    },
    enrichmentCompanies: {
      l: 'l',
      m: 'm',
    },
    enrichmentPeople: {
      l: 'l',
      m: 'm',
    },
    gptNode: {
      l: 'l',
      m: 'm',
    },
    scrape: {
      l: 'l',
      m: 'm',
    },
    searchCompany: {
      l: 'l',
      m: 'm',
    },
    searchDeveloper: {
      l: 'l',
      m: 'm',
    },
    searchJobs: {
      l: 'l',
      m: 'm',
    },
    searchLocalBusinesses: {
      l: 'l',
      m: 'm',
    },
    searchLookalikeCompany: {
      l: 'l',
      m: 'm',
    },
    searchLookalikePeople: {
      l: 'l',
      m: 'm',
    },
    searchPeople: {
      l: 'l',
      m: 'm',
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
    verifyEmail: {
      l: 'l',
      m: 'm',
    },
  },
  (_, path) => {
    const gradientName = path.map((it) => kebabCase(it)).join('-');

    return `tbl--ui-node-icon--${gradientName}`;
  },
);

createGlobalTheme(':root', gradients, {
  addGptColumn: {
    l: 'url(#tbl--ui-node-icon--add-gpt-column-l)',
    m: 'url(#tbl--ui-node-icon--add-gpt-column-m)',
  },
  apiSearch: {
    l: 'url(#tbl--ui-node-icon--api-search-l)',
    m: 'url(#tbl--ui-node-icon--api-search-m)',
  },
  enrichmentAll: {
    l: 'url(#tbl--ui-node-icon--enrichment-all-l)',
    m: 'url(#tbl--ui-node-icon--enrichment-all-m)',
  },
  enrichmentCompanies: {
    l: 'url(#tbl--ui-node-icon--enrichment-companies-l)',
    m: 'url(#tbl--ui-node-icon--enrichment-companies-m)',
  },
  enrichmentPeople: {
    l: 'url(#tbl--ui-node-icon--enrichment-people-l)',
    m: 'url(#tbl--ui-node-icon--enrichment-people-m)',
  },
  gptNode: {
    l: 'url(#tbl--ui-node-icon--gpt-node-l)',
    m: 'url(#tbl--ui-node-icon--gpt-node-m)',
  },
  scrape: {
    l: 'url(#tbl--ui-node-icon--scrape-l)',
    m: 'url(#tbl--ui-node-icon--scrape-m)',
  },
  searchCompany: {
    l: 'url(#tbl--ui-node-icon--search-company-l)',
    m: 'url(#tbl--ui-node-icon--search-company-m)',
  },
  searchDeveloper: {
    l: 'url(#tbl--ui-node-icon--search-developer-l)',
    m: 'url(#tbl--ui-node-icon--search-developer-m)',
  },
  searchJobs: {
    l: 'url(#tbl--ui-node-icon--search-jobs-l)',
    m: 'url(#tbl--ui-node-icon--search-jobs-m)',
  },
  searchLocalBusinesses: {
    l: 'url(#tbl--ui-node-icon--search-local-businesses-l)',
    m: 'url(#tbl--ui-node-icon--search-local-businesses-m)',
  },
  searchLookalikeCompany: {
    l: 'url(#tbl--ui-node-icon--search-lookalike-company-l)',
    m: 'url(#tbl--ui-node-icon--search-lookalike-company-m)',
  },
  searchLookalikePeople: {
    l: 'url(#tbl--ui-node-icon--search-lookalike-people-l)',
    m: 'url(#tbl--ui-node-icon--search-lookalike-people-m)',
  },
  searchPeople: {
    l: 'url(#tbl--ui-node-icon--search-people-l)',
    m: 'url(#tbl--ui-node-icon--search-people-m)',
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
  verifyEmail: {
    l: 'url(#tbl--ui-node-icon--verify-email-l)',
    m: 'url(#tbl--ui-node-icon--verify-email-m)',
  },
});

// endregion gradients

// region Enrichments colors

export const enrichments = createGlobalThemeContract(
  {
    anymailFinder: 'anymailFinder',
    apollo: {
      primary: 'primary',
      secondary: 'secondary',
    },
    bounceBan: {
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
    },
    bouncer: {
      primary: 'primary',
      secondary: 'secondary',
    },
    bouncify: {
      primary: 'primary',
      secondary: 'secondary',
    },
    buildWith: 'buildWith',
    captainVerify: {
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
      five: 'five',
    },
    cleanify: {
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
    },
    clearbit: {
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
    },
    clearout: {
      primary: 'primary',
      secondary: 'secondary',
    },
    companyEnrich: {
      primary: 'primary',
      secondary: 'secondary',
    },
    contactOut: {
      l: 'l',
      m: 'm',
      s: 's',
    },
    debounce: 'debounce',
    discoLike: 'discoLike',
    emailable: {
      l: 'l',
      m: 'm',
      s: 's',
    },
    emailListVerify: 'emailListVerify',
    enrichley: {
      primary: 'primary',
      secondary: 'secondary',
    },
    explorium: {
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
    },
    findymail: {
      primary: 'primary',
      secondary: 'secondary',
    },
    firecrawl: {
      l: 'l',
      m: 'm',
      s: 's',
    },
    heyBounce: {
      primary: 'primary',
      secondary: 'secondary',
    },
    hunter: {
      primary: 'primary',
      secondary: 'secondary',
    },
    kickbox: 'kickbox',
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
    mailChecker: 'mailChecker',
    mails: {
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
    muraena: 'muraena',
    neverBounce: {
      from: 'from',
      middle: 'middle',
      to: 'to',
    },
    nubela: 'nubela',
    ocean: 'ocean',
    peopleDataLabs: 'peopleDataLabs',
    perplexity: {
      primary: 'primary',
      secondary: 'secondary',
    },
    predictLeads: 'predictLeads',
    progai: 'progai',
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
    serper: 'serper',
    signalHire: {
      primary: 'primary',
      secondary: 'secondary',
    },
    theCompaniesApi: {
      primary: 'primary',
      secondary: 'secondary',
    },
    theirStack: 'theirStack',
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
  anymailFinder: '#000000',
  apollo: {
    primary: '#010202',
    secondary: '#fcc02b',
  },
  bounceBan: {
    one: '#fbbc04',
    two: '#34a853',
    three: '#ee6155',
    four: '#005eff',
  },
  bouncer: {
    primary: '#2a2964',
    secondary: '#1Aac78',
  },
  bouncify: {
    primary: '#ffffff',
    secondary: '#0052b8',
  },
  buildWith: '#094303',
  captainVerify: {
    one: '#39897b',
    two: '#4da792',
    three: '#5fbaa2',
    four: '#479d8d',
    five: '#278374',
  },
  cleanify: {
    primary: '#61b49c',
    secondary: '#8ad5bc',
    tertiary: '#f0825e',
  },
  clearbit: {
    primary: '#1ba2fe',
    secondary: '#5ebafd',
    tertiary: '#d2e9fc',
  },
  clearout: {
    primary: '#ffffff',
    secondary: '#eda945',
  },
  companyEnrich: {
    primary: '#086cd9',
    secondary: '#ffffff',
  },
  contactOut: {
    l: '',
    m: '',
    s: '',
  },
  debounce: '#346cF7',
  discoLike: '#000',
  emailable: {
    l: '',
    m: '',
    s: '',
  },
  emailListVerify: '#16bac4',
  enrichley: {
    primary: '#1a6233',
    secondary: '#18cf95',
  },
  explorium: {
    primary: '#54b092',
    secondary: '#62cca9',
    tertiary: '#f8aa60',
  },
  findymail: {
    primary: '#e3243b',
    secondary: '#000000',
  },
  firecrawl: {
    l: '',
    m: '',
    s: '',
  },
  heyBounce: {
    primary: '#333333',
    secondary: '#ebb624',
  },
  hunter: {
    primary: '#fa5320',
    secondary: '#ffffff',
  },
  kickbox: '#cbdb29',
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
  mailChecker: '#118f96',
  mails: {
    primary: '#000000',
    secondary: '#7859a9',
  },
  millionVerifier: {
    primary: '#0c1516',
    gradient: {
      from: '#20cc95',
      to: '#205ccc',
    },
  },
  muraena: '#110f60',
  neverBounce: {
    from: '#064af4',
    middle: '#06abdc',
    to: '#04e79e',
  },
  nubela: '#2c6ee8',
  ocean: '#3d60e1',
  peopleDataLabs: '#7f35fd',
  perplexity: {
    primary: '#ffffff',
    secondary: '#1f7984',
  },
  predictLeads: '#76508e',
  progai: '#000000',
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
  serper: '#90cdf4',
  signalHire: {
    primary: '#000000',
    secondary: '#478acc',
  },
  theCompaniesApi: {
    primary: '#2d3748',
    secondary: '#4c51bf',
  },
  theirStack: '#000000',
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
    addGptColumn: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    apiSearch: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    enrichmentAll: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    enrichmentCompanies: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    enrichmentPeople: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    gptNode: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    scrape: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    searchCompany: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    searchDeveloper: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    searchJobs: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    searchLocalBusinesses: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    searchLookalikeCompany: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    searchLookalikePeople: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
    searchPeople: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
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
    verifyEmail: {
      l: uiTheme.colors.icons.disabled.primary,
      m: uiTheme.colors.icons.disabled.primary,
    },
  }),
  ...assignVars(enrichments, {
    anymailFinder: uiTheme.colors.icons.disabled.primary,
    apollo: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    bounceBan: {
      one: uiTheme.colors.icons.disabled.primary,
      two: uiTheme.colors.icons.disabled.primary,
      three: uiTheme.colors.icons.disabled.primary,
      four: uiTheme.colors.icons.disabled.primary,
    },
    bouncer: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    bouncify: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    buildWith: uiTheme.colors.icons.disabled.primary,
    captainVerify: {
      one: uiTheme.colors.icons.disabled.primary,
      two: uiTheme.colors.icons.disabled.secondary,
      three: uiTheme.colors.icons.disabled.secondary,
      four: uiTheme.colors.icons.disabled.secondary,
      five: uiTheme.colors.icons.disabled.secondary,
    },
    cleanify: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
      tertiary: uiTheme.colors.icons.disabled.primary,
    },
    clearbit: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: '#d9d9d9',
      tertiary: uiTheme.colors.icons.disabled.secondary,
    },
    clearout: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    companyEnrich: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    contactOut: {
      l: 'url(#tbl--ui-node-icon--enrichment--contact-out-l--disabled)',
      m: 'url(#tbl--ui-node-icon--enrichment--contact-out-m--disabled)',
      s: 'url(#tbl--ui-node-icon--enrichment--contact-out-s--disabled)',
    },
    debounce: uiTheme.colors.icons.disabled.primary,
    discoLike: uiTheme.colors.icons.disabled.primary,
    emailable: {
      l: 'url(#tbl--ui-node-icon--enrichment--emailable-l--disabled)',
      m: 'url(#tbl--ui-node-icon--enrichment--emailable-m--disabled)',
      s: 'url(#tbl--ui-node-icon--enrichment--emailable-s--disabled)',
    },
    emailListVerify: uiTheme.colors.icons.disabled.primary,
    enrichley: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    explorium: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.primary,
      tertiary: uiTheme.colors.icons.disabled.primary,
    },
    findymail: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.primary,
    },
    firecrawl: {
      l: 'url(#tbl--ui-node-icon--enrichment--firecrawl-l--disabled)',
      m: 'url(#tbl--ui-node-icon--enrichment--firecrawl-m--disabled)',
      s: 'url(#tbl--ui-node-icon--enrichment--firecrawl-s--disabled)',
    },
    heyBounce: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    hunter: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    kickbox: uiTheme.colors.icons.disabled.primary,
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
    mailChecker: uiTheme.colors.icons.disabled.primary,
    mails: {
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
    muraena: uiTheme.colors.icons.disabled.primary,
    neverBounce: {
      from: uiTheme.colors.icons.disabled.primary,
      middle: '#d9d9d9',
      to: uiTheme.colors.icons.disabled.secondary,
    },
    nubela: uiTheme.colors.icons.disabled.primary,
    ocean: uiTheme.colors.icons.disabled.primary,
    peopleDataLabs: uiTheme.colors.icons.disabled.primary,
    perplexity: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    predictLeads: uiTheme.colors.icons.disabled.primary,
    progai: uiTheme.colors.icons.disabled.primary,
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
    serper: uiTheme.colors.icons.disabled.primary,
    signalHire: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    theCompaniesApi: {
      primary: uiTheme.colors.icons.disabled.primary,
      secondary: uiTheme.colors.icons.disabled.secondary,
    },
    theirStack: uiTheme.colors.icons.disabled.primary,
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
