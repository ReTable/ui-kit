import { globalFontFace } from '@vanilla-extract/css';

// region Families

const INTER = 'Inter var';

const IBM_PLEX_MONO = 'IBM Plex Mono';

// endregion

// region Fonts

export const sansSerif = `${JSON.stringify(INTER)}, sans-serif`;

export const monospace = `${JSON.stringify(IBM_PLEX_MONO)}, monospace`;

// endregion

// region Unicode Ranges

const MONOSPACE_UNICODE_RANGES = {
  latin1: [
    'U+0020-007E',
    'U+00A0-00FF',
    'U+0131',
    'U+0152-0153',
    'U+02C6',
    'U+02DA',
    'U+02DC',
    'U+2013-2014',
    'U+2018-201A',
    'U+201C-201E',
    'U+2020-2022',
    'U+2026',
    'U+2030',
    'U+2039-203A',
    'U+2044',
    'U+20AC',
    'U+2122',
    'U+2212',
    'U+FB01-FB02',
  ].join(', '),
  latin2: [
    'U+0100-0101',
    'U+0104-0130',
    'U+0132-0151',
    'U+0154-017F',
    'U+018F',
    'U+0192',
    'U+01A0-01A1',
    'U+01AF-01B0',
    'U+01FA-01FF',
    'U+0218-021B',
    'U+0237',
    'U+0259',
    'U+1E80-1E85',
    'U+1E9E',
    'U+20A1',
    'U+20A4',
    'U+20A6',
    'U+20A8-20AA',
    'U+20AD-20AE',
    'U+20B1-20B2',
    'U+20B4-20B5',
    'U+20B8-20BA',
    'U+20BD',
    'U+20BF',
  ].join(', '),
  latin3: ['U+0102-0103', 'U+01CD-01DC', 'U+1EA0-1EF9', 'U+20AB'].join(', '),
  cyrillic: [
    'U+0400-045F',
    'U+0462-0463',
    'U+046A-046B',
    'U+0472-0475',
    'U+0490-04C2',
    'U+04CF-04D9',
    'U+04DC-04E9',
    'U+04EE-04F9',
    'U+0524-0525',
  ].join(', '),
  pi: [
    'U+03C0',
    'U+0E3F',
    'U+2000-200D',
    'U+2028-2029',
    'U+202F',
    'U+2032-2033',
    'U+205F',
    'U+2070',
    'U+2074-2079',
    'U+2080-2089',
    'U+2113',
    'U+2116',
    'U+2126',
    'U+212E',
    'U+2150-2151',
    'U+2153-215E',
    'U+2190-2199',
    'U+21A9-21AA',
    'U+21B0-21B3',
    'U+21B6-21B7',
    'U+21BA-21BB',
    'U+21C4',
    'U+21C6',
    'U+2202',
    'U+2206',
    'U+220F',
    'U+2211',
    'U+2215',
    'U+221A',
    'U+221E',
    'U+222B',
    'U+2248',
    'U+2260',
    'U+2264-2265',
    'U+2500-259F',
    'U+25CA',
    'U+2713',
    'U+274C',
    'U+2B0E-2B11',
    'U+3000',
    'U+FEFF',
    'U+FFFD',
  ].join(', '),
};

type MonospaceUnicodeRange = keyof typeof MONOSPACE_UNICODE_RANGES;

// endregion

// region Helpers

function monospaceFontFaces(
  fontWeight: number | 'bold' | 'normal',
  urls: Partial<Record<MonospaceUnicodeRange, string>>,
) {
  for (const [rangeName, url] of Object.entries(urls) as Array<[MonospaceUnicodeRange, string]>) {
    const range = MONOSPACE_UNICODE_RANGES[rangeName];

    globalFontFace(`${JSON.stringify(IBM_PLEX_MONO)}`, {
      fontStyle: 'normal',
      fontWeight,
      fontDisplay: 'swap',
      src: `url('${url}') format('woff2')`,
      unicodeRange: range,
    });
  }
}

// region Inter

globalFontFace(JSON.stringify(INTER), {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '100 900',
  src: `url('./fonts/Inter Variable.woff2') format('woff2')`,
});

// endregion Inter

// region IBM Plex Mono Regular

monospaceFontFaces(400, {
  latin1: './fonts/IBM Plex Mono Regular.latin1.woff2',
  latin2: './fonts/IBM Plex Mono Regular.latin2.woff2',
  latin3: './fonts/IBM Plex Mono Regular.latin3.woff2',
  cyrillic: './fonts/IBM Plex Mono Regular.cyrillic.woff2',
  pi: './fonts/IBM Plex Mono Regular.pi.woff2',
});

// endregion IBM Plex Mono Regular

// region IBM Plex Mono Medium

monospaceFontFaces(500, {
  latin1: './fonts/IBM Plex Mono Medium.latin1.woff2',
  latin2: './fonts/IBM Plex Mono Medium.latin2.woff2',
  latin3: './fonts/IBM Plex Mono Medium.latin3.woff2',
  cyrillic: './fonts/IBM Plex Mono Medium.cyrillic.woff2',
  pi: './fonts/IBM Plex Mono Medium.pi.woff2',
});

// endregion IBM Plex Mono Medium

// region IBM Plex Mono Bold

monospaceFontFaces(700, {
  latin1: './fonts/IBM Plex Mono Bold.latin1.woff2',
  latin2: './fonts/IBM Plex Mono Bold.latin2.woff2',
  latin3: './fonts/IBM Plex Mono Bold.latin3.woff2',
  cyrillic: './fonts/IBM Plex Mono Bold.cyrillic.woff2',
  pi: './fonts/IBM Plex Mono Bold.pi.woff2',
});

// endregion IBM Plex Mono Bold
