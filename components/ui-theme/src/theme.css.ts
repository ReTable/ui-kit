import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

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

// NOTE: We use `tbl--` prefix for all variables to prevent collisions.
export const vars = createGlobalThemeContract(
  contractOf(tokens),
  (_, path) => `tbl--${path.join('--')}`,
);

// endregion

// region Theme

createGlobalTheme(':root', vars, tokens);

// endregion
