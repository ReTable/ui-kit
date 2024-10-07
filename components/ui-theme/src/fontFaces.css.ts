import { globalFontFace } from '@vanilla-extract/css';

// region Families

const INTER = 'Inter';

const IBM_PLEX_MONO = 'IBM Plex Mono';

// endregion

// region Fonts

export const sansSerif = `${JSON.stringify(INTER)}, sans-serif`;

export const monospace = `${JSON.stringify(IBM_PLEX_MONO)}, monospace`;

// endregion

// region Unicode Ranges

const UNICODE_RANGES = {
  latin: [
    'U+0000-00FF',
    'U+0131',
    'U+0152-0153',
    'U+02BB-02BC',
    'U+02C6',
    'U+02DA',
    'U+02DC',
    'U+0304',
    'U+0308',
    'U+0329',
    'U+2000-206F',
    'U+2074',
    'U+20AC',
    'U+2122',
    'U+2191',
    'U+2193',
    'U+2212',
    'U+2215',
    'U+FEFF',
    'U+FFFD',
  ].join(', '),
  latinExt: [
    'U+0100-02AF',
    'U+0304',
    'U+0308',
    'U+0329',
    'U+1E00-1E9F',
    'U+1EF2-1EFF',
    'U+2020',
    'U+20A0-20AB',
    'U+20AD-20C0',
    'U+2113',
    'U+2C60-2C7F',
    'U+A720-A7FF',
  ].join(', '),

  cyrillic: ['U+0301', 'U+0400-045F', 'U+0490-0491', 'U+04B0-04B1', 'U+2116'].join(', '),
  cyrillicExt: [
    'U+0460-052F',
    'U+1C80-1C88',
    'U+20B4',
    'U+2DE0-2DFF',
    'U+A640-A69F',
    'U+FE2E-FE2F',
  ].join(', '),

  greek: ['U+0370-0377', 'U+037A-037F', 'U+0384-038A', 'U+038C', 'U+038E-03A1', 'U+03A3-03FF'].join(
    ', ',
  ),
  greekExt: 'U+1F00-1FFF',

  vietnamese: [
    'U+0102-0103',
    'U+0110-0111',
    'U+0128-0129',
    'U+0168-0169',
    'U+01A0-01A1',
    'U+01AF-01B0',
    'U+0300-0301',
    'U+0303-0304',
    'U+0308-0309',
    'U+0323',
    'U+0329',
    'U+1EA0-1EF9',
    'U+20AB',
  ].join(', '),
};

type UnicodeRange = keyof typeof UNICODE_RANGES;

// endregion

// region Helpers

function staticFontFaces(
  fontFamily: string,
  fontWeight: number | 'bold' | 'normal',
  urls: Partial<Record<UnicodeRange, string>>,
) {
  for (const [rangeName, url] of Object.entries(urls) as Array<[UnicodeRange, string]>) {
    const range = UNICODE_RANGES[rangeName];

    globalFontFace(`'${fontFamily}'`, {
      fontStyle: 'normal',
      fontWeight,
      fontDisplay: 'swap',
      src: `url('${url}') format('woff2')`,
      unicodeRange: range,
    });
  }
}

function variableFontFaces(
  fontFamily: string,
  fontStyle: 'normal' | 'italic',
  fontWeightFrom: number,
  fontWeightTo: number,
  urls: Partial<Record<UnicodeRange, string>>,
) {
  for (const [rangeName, url] of Object.entries(urls) as Array<[UnicodeRange, string]>) {
    const range = UNICODE_RANGES[rangeName];

    globalFontFace(`'${fontFamily}'`, {
      fontStyle,
      fontWeight: `${fontWeightFrom} ${fontWeightTo}`,
      fontDisplay: 'swap',
      src: `url('${url}') format('woff2')`,
      unicodeRange: range,
    });
  }
}

// endregion

// region Inter

variableFontFaces(INTER, 'normal', 100, 900, {
  latin: './fonts/Inter/Inter.latin.woff2',
  latinExt: './fonts/Inter/Inter.latin-ext.woff2',
  cyrillic: './fonts/Inter/Inter.cyrillic.woff2',
  cyrillicExt: './fonts/Inter/Inter.cyrillic-ext.woff2',
  greek: './fonts/Inter/Inter.greek.woff2',
  greekExt: './fonts/Inter/Inter.greek-ext.woff2',
  vietnamese: './fonts/Inter/Inter.vietnamese.woff2',
});

// endregion Inter

// region IBM Plex Mono Regular

staticFontFaces(IBM_PLEX_MONO, 400, {
  latin: './fonts/IBM Plex Mono Regular/IBM Plex Mono Regular.latin.woff2',
  latinExt: './fonts/IBM Plex Mono Regular/IBM Plex Mono Regular.latin-ext.woff2',
  cyrillic: './fonts/IBM Plex Mono Regular/IBM Plex Mono Regular.cyrillic.woff2',
  cyrillicExt: './fonts/IBM Plex Mono Regular/IBM Plex Mono Regular.cyrillic-ext.woff2',
  vietnamese: './fonts/IBM Plex Mono Regular/IBM Plex Mono Regular.vietnamese.woff2',
});

// endregion

// region IBM Plex Mono Medium

staticFontFaces(IBM_PLEX_MONO, 500, {
  latin: './fonts/IBM Plex Mono Medium/IBM Plex Mono Medium.latin.woff2',
  latinExt: './fonts/IBM Plex Mono Medium/IBM Plex Mono Medium.latin-ext.woff2',
  cyrillic: './fonts/IBM Plex Mono Medium/IBM Plex Mono Medium.cyrillic.woff2',
  cyrillicExt: './fonts/IBM Plex Mono Medium/IBM Plex Mono Medium.cyrillic-ext.woff2',
  vietnamese: './fonts/IBM Plex Mono Medium/IBM Plex Mono Medium.vietnamese.woff2',
});

// endregion

// region IBM Plex Mono Bold

staticFontFaces(IBM_PLEX_MONO, 700, {
  latin: './fonts/IBM Plex Mono Bold/IBM Plex Mono Bold.latin.woff2',
  latinExt: './fonts/IBM Plex Mono Bold/IBM Plex Mono Bold.latin-ext.woff2',
  cyrillic: './fonts/IBM Plex Mono Bold/IBM Plex Mono Bold.cyrillic.woff2',
  cyrillicExt: './fonts/IBM Plex Mono Bold/IBM Plex Mono Bold.cyrillic-ext.woff2',
  vietnamese: './fonts/IBM Plex Mono Bold/IBM Plex Mono Bold.vietnamese.woff2',
});

// endregion
