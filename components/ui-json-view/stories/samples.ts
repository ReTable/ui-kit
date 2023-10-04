import {
  randBoolean,
  randFloat,
  randJSON,
  randNumber,
  randPhrase,
  randTextRange,
  seed,
} from '@ngneat/falso';

seed('ui-json-docs');

export const samples = {
  intro: JSON.stringify({
    words: ['This', 'is', 'JSON'],
  }),

  isInteractive: JSON.stringify({
    level1: [
      {
        level3: ['hello', 'World!'],
      },
    ],
  }),

  showDataTypes: JSON.stringify({
    boolean: randBoolean(),
    float: randFloat(),
    integer: randNumber(),
    null: null,
    string: randPhrase(),
  }),

  showObjectSize: JSON.stringify({
    emptyArray: [],
    array: [randBoolean(), randFloat(), randNumber(), null, randPhrase()],
    emptyObject: {},
    object: {
      boolean: randBoolean(),
      float: randFloat(),
      integer: randNumber(),
      null: null,
      string: randPhrase(),
    },
  }),

  shortStringAfterLength: JSON.stringify({
    short: randTextRange({ min: 10, max: 20 }),
    long: randTextRange({ min: 40, max: 50 }),
  }),

  collapsed: JSON.stringify({
    level1: [
      'level2',
      {
        level3: ['level4'],
      },
    ],
  }),

  limit: JSON.stringify([
    randTextRange({ min: 10, max: 20 }),
    randTextRange({ min: 40, max: 50 }),
    randTextRange({ min: 10, max: 20 }),
    randTextRange({ min: 40, max: 50 }),
    randTextRange({ min: 10, max: 20 }),
    randTextRange({ min: 40, max: 50 }),
    randTextRange({ min: 10, max: 20 }),
    randTextRange({ min: 40, max: 50 }),
    randTextRange({ min: 10, max: 20 }),
    randTextRange({ min: 40, max: 50 }),
  ]),

  isVirtual: JSON.stringify(randJSON()),
};
