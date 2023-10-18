import { capitalCase, kebabCase } from 'change-case';

import { uiTheme } from '~';

type Variables = Record<
  string,
  Record<string, { font: string; letterSpacing?: string; textTransform?: string }>
>;

type Access = 'css' | 'sass' | 'sassMixin' | 'vanillaExtract' | 'vanillaExtractVariant';

type FontStyle = {
  font: string;
  letterSpacing?: string;
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

    for (const [variant, styles] of Object.entries(variants)) {
      const weight = variant.slice(0, -2);
      const size = variant.slice(-2);

      const cssPrefix = `fonts--${kebabCase(family)}--${kebabCase(weight)}-${size}`;

      const css: FontStyle = {
        font: `var(--tbl--${cssPrefix}--font)`,
      };
      const sass: FontStyle = {
        font: `$${cssPrefix}--font`,
      };
      const sassMixin: FontStyle = {
        font: `${family}-${weight}-${size}`,
      };
      const vanillaExtract: FontStyle = {
        font: `uiTheme.fonts.${family}.${variant}.font`,
      };
      const vanillaExtractVariant: FontStyle = {
        font: `uiFonts.${family}.${variant}`,
      };

      if (styles.letterSpacing != null) {
        css.letterSpacing = `var(--tbl--${cssPrefix}--letter-spacing)`;
        sass.letterSpacing = `$${cssPrefix}--letter-spacing`;
        vanillaExtract.letterSpacing = `uiTheme.fonts.${family}.${variant}.letterSpacing`;
      }

      if (styles.textTransform != null) {
        css.textTransform = `var(--tbl--${cssPrefix}--text-transform)`;
        sass.textTransform = `$${cssPrefix}--text-transform`;
        vanillaExtract.textTransform = `uiTheme.fonts.${family}.${variant}.textTransform`;
      }

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
