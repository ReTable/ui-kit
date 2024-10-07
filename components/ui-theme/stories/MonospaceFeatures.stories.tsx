import { Meta, StoryObj } from '@storybook/react';

import { FontFeature, Sample } from './FontFeature';

const meta: Meta = {
  component: FontFeature,

  title: 'Font Features / Monospace',
};

export default meta;

function storyOf(settings: string | string[], samples: Sample[]): StoryObj<typeof FontFeature> {
  return {
    args: {
      family: 'monospace',
      defaultSettings: ['calt', 'liga', 'clig', 'dlig', 'subs', 'sups'],
      settings,
      samples,
    },
  };
}

export const SlashedZero = storyOf('zero', [
  {
    before: '0',
    after: '0',
  },
]);

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
]);

export const Superscripts = storyOf('sups', [
  {
    before: 'A',
    after: '1 2 3 4 5 6 7 8 9 0',
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
    before: 'No',
    after: 'No',
  },
]);

export const AlternateGlyphs01 = storyOf('ss01', [
  {
    before: 'a',
    after: 'a',
  },
]);

export const AlternateGlyphs02 = storyOf('ss02', [
  {
    before: 'g',
    after: 'g',
  },
]);
