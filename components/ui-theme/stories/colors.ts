import { paramCase } from 'change-case';

import { uiTheme } from '~';

type ScopedVariables = {
  [index: string]: ScopedVariables | string;
};

type Variables = Record<string, ScopedVariables>;

type Access = 'css' | 'sass' | 'vanillaExtract';

export type PlainColor = Record<Access, string> & {
  type: 'plain';
};

export type GradientColor = {
  type: 'gradient';

  from: PlainColor;
  to: PlainColor;
};

export type Color = PlainColor | GradientColor;

export type Category = {
  name: string;

  colors: Color[];
};

type QueueItem = Record<Access, string> & { scoped: ScopedVariables | string };

function normalizeColor(color: PlainColor): PlainColor {
  if (/\.\d+$/.test(color.vanillaExtract)) {
    const split = color.vanillaExtract.lastIndexOf('.');

    color.vanillaExtract = `${color.vanillaExtract.slice(0, split)}["${color.vanillaExtract.slice(
      split + 1,
    )}"]`;
  }

  if (/-alpha--\d+$/.test(color.css)) {
    const [left, right] = color.css.split('-alpha--');

    color.css = `${left}--A${right}`;
  }

  if (/-alpha--\d+$/.test(color.sass)) {
    const [left, right] = color.sass.split('-alpha--');

    color.sass = `${left}--A${right}`;
  }

  return color;
}

function parseColors(category: string, vars: ScopedVariables): Color[] {
  const queue: QueueItem[] = [
    {
      css: `--tbl--colors--${paramCase(category)}`,
      sass: `$colors--${paramCase(category)}`,
      vanillaExtract: `uiTheme.colors.${category}`,

      scoped: vars,
    },
  ];

  const colors: Color[] = [];

  const fromColors: PlainColor[] = [];
  const toColors = new Map<string, PlainColor>();

  while (queue.length > 0) {
    const item = queue.pop();

    if (item == null) {
      break;
    }

    const { css, sass, vanillaExtract, scoped } = item;

    if (typeof scoped === 'string') {
      const color = normalizeColor({
        type: 'plain',

        css,
        sass,
        vanillaExtract,
      });

      if (color.css.endsWith('--from')) {
        fromColors.push(color);
      } else if (color.css.endsWith('--to')) {
        toColors.set(color.css.replace(/--to$/, '--from'), color);
      } else {
        colors.push(color);
      }

      continue;
    }

    for (const [key, value] of Object.entries(scoped)) {
      queue.push({
        css: `${css}--${paramCase(key)}`,
        vanillaExtract: `${vanillaExtract}.${key}`,
        sass: `${sass}--${paramCase(key)}`,

        scoped: value,
      });
    }
  }

  for (const from of fromColors) {
    const to = toColors.get(from.css);

    if (to == null) {
      colors.push(from);
    } else {
      toColors.delete(from.css);

      colors.push({
        type: 'gradient',

        from,
        to,
      });
    }
  }

  if (toColors.size > 0) {
    colors.push(...toColors.values());
  }

  return colors;
}

function parseCategories(vars: Variables): Category[] {
  return Object.entries(vars).map(([key, value]) => ({
    name: key,

    colors: parseColors(key, value),
  }));
}

export const colors = parseCategories(uiTheme.colors);
