import { capitalCase, kebabCase } from 'change-case';

import { uiTheme } from '~';

type Variables = Record<
  string,
  Record<string, { font: string; letterSpacing?: string; textTransform?: string }>
>;

type Access = 'css' | 'sass' | 'sassMixin' | 'vanillaExtract' | 'vanillaExtractVariant';

type FontStyle = {
  font: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textTransform?: string;
};

export type Font = Record<Access, FontStyle> & {
  name: string;

  weight: string;
  size: string;
};

export type Category = {
  name: string;

  fonts: Font[];
};

function parseCategories(vars: Variables): Category[] {
  const categories: Category[] = [];

  for (const [family, variants] of Object.entries(vars)) {
    const fonts: Font[] = [];

    for (const variant of Object.keys(variants)) {
      const weight = variant.slice(0, -2);
      const size = variant.slice(-2);

      const cssPrefix = `fonts--${kebabCase(family)}--${kebabCase(weight)}-${size}`;

      const css: FontStyle = {
        font: `var(--tbl--${cssPrefix}--font)`,
        fontFamily: `var(--tbl--${cssPrefix}--font-family)`,
        fontSize: `var(--tbl--${cssPrefix}--font-size)`,
        fontWeight: `var(--tbl--${cssPrefix}--font-weight)`,
        letterSpacing: `var(--tbl--${cssPrefix}--letter-spacing)`,
        lineHeight: `var(--tbl--${cssPrefix}--line-height)`,
        textTransform: `var(--tbl--${cssPrefix}--text-transform)`,
      };
      const sass: FontStyle = {
        font: `$${cssPrefix}--font`,
        fontFamily: `$${cssPrefix}--font-family`,
        fontSize: `$${cssPrefix}--font-size`,
        fontWeight: `$${cssPrefix}--font-weight`,
        letterSpacing: `$${cssPrefix}--letter-spacing`,
        lineHeight: `$${cssPrefix}--line-height`,
        textTransform: `$${cssPrefix}--text-transform`,
      };
      const sassMixin: FontStyle = {
        font: `${family}-${weight}-${size}`,
      };
      const vanillaExtract: FontStyle = {
        font: `uiTheme.fonts.${family}.${variant}.font`,
        fontFamily: `uiTheme.fonts.${family}.${variant}.fontFamily`,
        fontSize: `uiTheme.fonts.${family}.${variant}.fontSize`,
        fontWeight: `uiTheme.fonts.${family}.${variant}.fontWeight`,
        letterSpacing: `uiTheme.fonts.${family}.${variant}.letterSpacing`,
        lineHeight: `uiTheme.fonts.${family}.${variant}.lineHeight`,
        textTransform: `uiTheme.fonts.${family}.${variant}.textTransform`,
      };
      const vanillaExtractVariant: FontStyle = {
        font: `uiFonts.${family}.${variant}`,
      };

      fonts.push({
        name: capitalCase(`${weight} ${size}`),

        weight,
        size,

        css,
        sass,
        sassMixin,
        vanillaExtract,
        vanillaExtractVariant,
      });
    }

    categories.push({
      name: capitalCase(family),

      fonts,
    });
  }

  return categories;
}

export const fonts = parseCategories(uiTheme.fonts);
