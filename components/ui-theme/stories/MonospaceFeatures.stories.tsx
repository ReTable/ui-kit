import { Meta, StoryObj } from '@storybook/react';

import { FontFeature } from './FontFeature';

const meta: Meta = {
  component: FontFeature,

  title: 'Font Features / Monospace',
};

export default meta;

type Story = StoryObj<typeof FontFeature>;

export const SlashedZero: Story = {
  args: {
    family: 'monospace',
    fontFeatureSettings: 'zero',
    samples: [
      {
        before: '0',
        after: '0',
      },
    ],
  },
};

export const Fractions: Story = {
  args: {
    family: 'monospace',
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
    ],
  },
};

export const Superscripts: Story = {
  args: {
    family: 'monospace',
    fontFeatureSettings: 'sups',
    samples: [
      {
        before: 'A',
        after: '1 2 3 4 5 6 7 8 9 0',
      },
    ],
  },
};

export const Ordinals: Story = {
  args: {
    family: 'monospace',
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
        before: 'No',
        after: 'No',
      },
    ],
  },
};

export const AlternateGlyphs01: Story = {
  args: {
    family: 'monospace',
    fontFeatureSettings: 'ss01',
    samples: [
      {
        before: 'a',
        after: 'a',
      },
    ],
  },
};

export const AlternateGlyphs02: Story = {
  args: {
    family: 'monospace',
    fontFeatureSettings: 'ss02',
    samples: [
      {
        before: 'g',
        after: 'g',
      },
    ],
  },
};
