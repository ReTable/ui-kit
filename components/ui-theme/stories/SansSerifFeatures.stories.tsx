import { Meta, StoryObj } from '@storybook/react';

import { FontFeature } from './FontFeature';

const meta: Meta = {
  component: FontFeature,

  title: 'Font Features / Sans Serif',
};

export default meta;

type Story = StoryObj<typeof FontFeature>;

export const DiscretionaryLigatures: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'dlig',
    samples: [
      {
        before: '!?',
        after: '!?',
      },
      {
        before: '?!',
        after: '?!',
      },
    ],
  },
};

export const ContextualAlternates: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'calt',
    samples: [
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
    ],
  },
};

export const ProportionalLining: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: ['pnum', 'lnum'],
    samples: [
      {
        after: '1234567890',
      },
    ],
  },
};

export const TabularLining: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: ['tnum', 'lnum'],
    samples: [
      {
        after: '1234567890',
      },
    ],
  },
};

export const Fractions: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'frac',
    samples: [
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
    ],
  },
};

export const SlashedZero: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'zero',
    samples: [
      {
        before: '0',
        after: '0',
      },
    ],
  },
};

export const Superscripts: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'sups',
    samples: [
      {
        before: 'A',
        after: '12345abcde',
      },
    ],
  },
};

export const Subscripts: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'subs',
    samples: [
      {
        before: 'A',
        after: '12345abcde',
      },
    ],
  },
};

export const CaseSensitiveForms: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'case',
    samples: [
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
    ],
  },
};

export const Ordinals: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'ordn',
    samples: [
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
    ],
  },
};

export const AlternateGlyphs01: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'ss01',
    samples: [
      {
        before: '13469',
        after: '13469',
      },
    ],
  },
};

export const AlternateGlyphs02: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'ss02',
    samples: [
      {
        before: '0Illß',
        after: '0Illß',
      },
    ],
  },
};

export const AlternateGlyphs03: Story = {
  args: {
    family: 'sans-serif',
    fontFeatureSettings: 'ss03',
    samples: [
      {
        before: 'baroreceptor',
        after: 'baroreceptor',
      },
    ],
  },
};
