import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { kebabCase } from 'change-case';

import { tokens } from './vars.css';

// region Helpers

type Tokens = {
  [index: string]: Tokens | string;
};

type Contract<Source extends Tokens> = {
  [Key in keyof Source]: Source[Key] extends Tokens ? Contract<Source[Key]> : null;
};

function contractOf<Source extends Tokens>(source: Source): Contract<Source> {
  // @ts-expect-error That object will be filled later.
  const target: Contract<Source> = {};

  for (const key in source) {
    const value = source[key];

    // @ts-expect-error We can't guarantee type safety in terms of TypeScript here.
    target[key] = typeof value === 'string' ? null : contractOf(value);
  }

  return target;
}

// endregion

// region Contract

function fontNameOf(path: string[]) {
  return path
    .map((it) => {
      const segment = kebabCase(it);

      return /\d+$/.test(segment) ? `${segment.slice(0, -2)}-${segment.slice(-2)}` : segment;
    })
    .join('--');
}

function colorNameOf(path: string[]) {
  let isAlpha = false;

  return path
    .map((it) => {
      const segment = kebabCase(it);

      if (segment.endsWith('-alpha')) {
        isAlpha = true;

        return segment.slice(0, -6);
      } else if (/^\d+$/.test(it) && isAlpha) {
        return `A${segment}`;
      }

      return segment;
    })
    .join('--')
    .replace(/(?<left>[a-z]+)(?<right>\d+)$/, '$<left>-$<right>');
}

function nameOf(path: string[]) {
  const name = path[0] === 'fonts' ? fontNameOf(path) : colorNameOf(path);

  return `tbl--${name}`;
}

// NOTE: We use `tbl--` prefix for all variables to prevent collisions.
export const vars = createGlobalThemeContract(contractOf(tokens), (_, path) => nameOf(path));

// endregion

// region Theme

createGlobalTheme(':root', vars, tokens);

// endregion
