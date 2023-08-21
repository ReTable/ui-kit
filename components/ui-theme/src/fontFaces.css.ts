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
    'U+0100-024F',
    'U+0259',
    'U+1E00-1EFF',
    'U+2020',
    'U+20A0-20AB',
    'U+20AD-20CF',
    'U+2113',
    'U+2C60-2C7F',
    'U+A720-A7FF',
  ].join(', '),

  cyrillic: ['U+0400-045F', 'U+0490-0491', 'U+04B0-04B1', 'U+2116'].join(', '),
  cyrillicExt: [
    'U+0460-052F',
    'U+1C80-1C88',
    'U+20B4',
    'U+2DE0-2DFF',
    'U+A640-A69F',
    'U+FE2E-FE2F',
  ].join(', '),

  greek: 'U+0370-03FF',
  greekExt: 'U+1F00-1FFF',

  vietnamese: ['U+0102-0103', 'U+0110-0111', 'U+1EA0-1EF9', 'U+20AB'].join(', '),
};

type UnicodeRange = keyof typeof UNICODE_RANGES;

// endregion

// region Helpers

function globalFontFaces(
  fontFamily: string,
  fontWeight: number | 'bold' | 'normal',
  urls: Partial<Record<UnicodeRange, string>>,
) {
  for (const [rangeName, url] of Object.entries(urls) as Array<[UnicodeRange, string]>) {
    const range = UNICODE_RANGES[rangeName];

    globalFontFace(`'${fontFamily}'`, {
      fontStyle: 'normal',
      fontWeight: fontWeight,
      fontDisplay: 'swap',
      src: `url(${url}) format('woff2')`,
      unicodeRange: range,
    });
  }
}

// endregion

// region Inter Regular

globalFontFaces(INTER, 'normal', {
  latin: './fonts/Inter-Regular/Inter-Regular.latin.woff2',
  latinExt: './fonts/Inter-Regular/Inter-Regular.latin-ext.woff2',
  cyrillic: './fonts/Inter-Regular/Inter-Regular.cyrillic.woff2',
  cyrillicExt: './fonts/Inter-Regular/Inter-Regular.cyrillic-ext.woff2',
  greek: './fonts/Inter-Regular/Inter-Regular.greek.woff2',
  greekExt: './fonts/Inter-Regular/Inter-Regular.greek-ext.woff2',
  vietnamese: './fonts/Inter-Regular/Inter-Regular.vietnamese.woff2',
});

// endregion

// region Inter Medium

globalFontFaces(INTER, 500, {
  latin: './fonts/Inter-Medium/Inter-Medium.latin.woff2',
  latinExt: './fonts/Inter-Medium/Inter-Medium.latin-ext.woff2',
  cyrillic: './fonts/Inter-Medium/Inter-Medium.cyrillic.woff2',
  cyrillicExt: './fonts/Inter-Medium/Inter-Medium.cyrillic-ext.woff2',
  greek: './fonts/Inter-Medium/Inter-Medium.greek.woff2',
  greekExt: './fonts/Inter-Medium/Inter-Medium.greek-ext.woff2',
  vietnamese: './fonts/Inter-Medium/Inter-Medium.vietnamese.woff2',
});

// endregion

// region Inter SemiBold

globalFontFaces(INTER, 600, {
  latin: './fonts/Inter-SemiBold/Inter-SemiBold.latin.woff2',
  latinExt: './fonts/Inter-SemiBold/Inter-SemiBold.latin-ext.woff2',
  cyrillic: './fonts/Inter-SemiBold/Inter-SemiBold.cyrillic.woff2',
  cyrillicExt: './fonts/Inter-SemiBold/Inter-SemiBold.cyrillic-ext.woff2',
  greek: './fonts/Inter-SemiBold/Inter-SemiBold.greek.woff2',
  greekExt: './fonts/Inter-SemiBold/Inter-SemiBold.greek-ext.woff2',
  vietnamese: './fonts/Inter-SemiBold/Inter-SemiBold.vietnamese.woff2',
});

// endregion

// region Inter Bold

globalFontFaces(INTER, 700, {
  latin: './fonts/Inter-Bold/Inter-Bold.latin.woff2',
  latinExt: './fonts/Inter-Bold/Inter-Bold.latin-ext.woff2',
  cyrillic: './fonts/Inter-Bold/Inter-Bold.cyrillic.woff2',
  cyrillicExt: './fonts/Inter-Bold/Inter-Bold.cyrillic-ext.woff2',
  greek: './fonts/Inter-Bold/Inter-Bold.greek.woff2',
  greekExt: './fonts/Inter-Bold/Inter-Bold.greek-ext.woff2',
  vietnamese: './fonts/Inter-Bold/Inter-Bold.vietnamese.woff2',
});

// endregion

// region IBM Plex Mono Regular

globalFontFaces(IBM_PLEX_MONO, 'normal', {
  latin: './fonts/IBMPlexMono-Regular/IBMPlexMono-Regular.latin.woff2',
  latinExt: './fonts/IBMPlexMono-Regular/IBMPlexMono-Regular.latin-ext.woff2',
  cyrillic: './fonts/IBMPlexMono-Regular/IBMPlexMono-Regular.cyrillic.woff2',
  cyrillicExt: './fonts/IBMPlexMono-Regular/IBMPlexMono-Regular.cyrillic-ext.woff2',
  vietnamese: './fonts/IBMPlexMono-Regular/IBMPlexMono-Regular.vietnamese.woff2',
});

// endregion

// region IBM Plex Mono Medium

globalFontFaces(IBM_PLEX_MONO, 500, {
  latin: './fonts/IBMPlexMono-Medium/IBMPlexMono-Medium.latin.woff2',
  latinExt: './fonts/IBMPlexMono-Medium/IBMPlexMono-Medium.latin-ext.woff2',
  cyrillic: './fonts/IBMPlexMono-Medium/IBMPlexMono-Medium.cyrillic.woff2',
  cyrillicExt: './fonts/IBMPlexMono-Medium/IBMPlexMono-Medium.cyrillic-ext.woff2',
  vietnamese: './fonts/IBMPlexMono-Medium/IBMPlexMono-Medium.vietnamese.woff2',
});

// endregion

// region IBM Plex Mono Bold

globalFontFaces(IBM_PLEX_MONO, 700, {
  latin: './fonts/IBMPlexMono-Bold/IBMPlexMono-Bold.latin.woff2',
  latinExt: './fonts/IBMPlexMono-Bold/IBMPlexMono-Bold.latin-ext.woff2',
  cyrillic: './fonts/IBMPlexMono-Bold/IBMPlexMono-Bold.cyrillic.woff2',
  cyrillicExt: './fonts/IBMPlexMono-Bold/IBMPlexMono-Bold.cyrillic-ext.woff2',
  vietnamese: './fonts/IBMPlexMono-Bold/IBMPlexMono-Bold.vietnamese.woff2',
});

// endregion
