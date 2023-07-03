import { fontFace, style } from '@vanilla-extract/css';

import svgUrl from './assets/image.svg';

import bmpUrl from './assets/image.bmp';
import gifUrl from './assets/image.gif';
import icoUrl from './assets/image.ico';
import jpegUrl from './assets/image.jpeg';
import jpgUrl from './assets/image.jpg';
import pngUrl from './assets/image.png';
import webpUrl from './assets/image.webp';

import eotUrl from './assets/font.eot';
import otfUrl from './assets/font.otf';
import ttfUrl from './assets/font.ttf';
import woffUrl from './assets/font.woff';
import woff2Url from './assets/font.woff2';

export const bmp = style({
  backgroundImage: `url(${bmpUrl})`,
});

export const gif = style({
  backgroundImage: `url(${gifUrl})`,
});

export const ico = style({
  backgroundImage: `url(${icoUrl})`,
});

export const jpeg = style({
  backgroundImage: `url(${jpegUrl})`,
});

export const jpg = style({
  backgroundImage: `url(${jpgUrl})`,
});

export const png = style({
  backgroundImage: `url(${pngUrl})`,
});

export const svg = style({
  backgroundImage: `url(${svgUrl})`,
});

export const webp = style({
  backgroundImage: `url(${webpUrl})`,
});

const eotFontFace = fontFace({
  src: `url(${eotUrl})`,
});

export const eot = style({
  fontFamily: eotFontFace,
});

const otfFontFace = fontFace({
  src: `url(${otfUrl})`,
});

export const otf = style({
  fontFamily: otfFontFace,
});

const ttfFontFace = fontFace({
  src: `url(${ttfUrl})`,
});

export const ttf = style({
  fontFamily: ttfFontFace,
});

const woffFontFace = fontFace({
  src: `url(${woffUrl})`,
});

export const woff = style({
  fontFamily: woffFontFace,
});

const woff2FontFace = fontFace({
  src: `url(${woff2Url})`,
});

export const woff2 = style({
  fontFamily: woff2FontFace,
});
