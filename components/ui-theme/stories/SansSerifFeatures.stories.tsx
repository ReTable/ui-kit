import { Meta, StoryObj } from '@storybook/react';

import { FontFeature, Sample } from './FontFeature';

const meta: Meta = {
  component: FontFeature,

  title: 'Font Features / Sans Serif',
};

export default meta;

function storyOf(settings: string | string[], samples: Sample[]): StoryObj<typeof FontFeature> {
  return {
    args: {
      family: 'sans-serif',
      defaultSettings: ['calt', 'liga', 'clig', 'dlig', 'subs', 'sups'],
      settings,
      samples,
    },
  };
}

export const DiscretionaryLigatures = storyOf('dlig', [
  {
    before: '!?',
    after: '!?',
  },
  {
    before: '?!',
    after: '?!',
  },
]);

export const ContextualAlternates = storyOf('calt', [
  {
    before: '3x9',
    after: '3x9',
  },
  {
    before: '12:56',
    after: '12:56',
  },
  {
    before: 'FE—X',
    after: 'FE—X',
  },
  {
    before: '(SEMI)',
    after: '(SEMI)',
  },
  {
    before: 'C@T',
    after: 'C@T',
  },
  {
    before: ':-)',
    after: ':-)',
  },
]);

export const ProportionalLining = storyOf(
  ['pnum', 'lnum'],
  [
    {
      after: '1234567890',
    },
  ],
);

export const TabularLining = storyOf(
  ['tnum', 'lnum'],
  [
    {
      after: '1234567890',
    },
  ],
);

export const Fractions = storyOf('frac', [
  {
    after: '1/2',
  },
  {
    after: '3/4',
  },
  {
    after: '5/6',
  },
  {
    after: '7/8',
  },
  {
    after: '90/123',
  },
]);

export const SlashedZero = storyOf('zero', [
  {
    before: '0',
    after: '0',
  },
]);

export const Superscripts = storyOf('sups', [
  {
    before: 'A',
    after: '12345abcde',
  },
]);

export const Subscripts = storyOf('subs', [
  {
    before: 'A',
    after: '12345abcde',
  },
]);

export const CaseSensitiveForms = storyOf('case', [
  {
    before: '(A)',
    after: '(A)',
  },
  {
    before: '{A}',
    after: '{A}',
  },
  {
    before: '[A]',
    after: '[A]',
  },
  {
    before: '-',
    after: '-',
  },
  {
    before: '–',
    after: '–',
  },
  {
    before: '—',
    after: '—',
  },
  {
    before: '@',
    after: '@ ',
  },
]);

export const Ordinals = storyOf('ordn', [
  {
    before: '3a',
    after: '3a',
  },
  {
    before: '4o',
    after: '4o',
  },
  {
    before: 'No.',
    after: 'No.',
  },
]);

export const AlternateGlyphs01 = storyOf('ss01', [
  {
    before: '13469',
    after: '13469',
  },
]);

export const AlternateGlyphs02 = storyOf('ss02', [
  {
    before: '0Illß',
    after: '0Illß',
  },
]);

export const AlternateGlyphs03 = storyOf('ss03', [
  {
    before: 'baroreceptor',
    after: 'baroreceptor',
  },
]);
