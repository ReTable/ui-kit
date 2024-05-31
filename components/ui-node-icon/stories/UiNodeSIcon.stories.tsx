import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { UiInnerJoinSIcon, UiNodeSIcons, UiPostgresSourceSIcon } from '~';

import { Grid, iconSize, iconSizeStyle } from './components';

// region Args

type Args = {
  currentColor: string;
  search: string;
};

// endregion Args

// region Meta

const meta: Meta = {
  title: 'Ui*SIcons',

  component: UiInnerJoinSIcon,

  argTypes: {
    currentColor: {
      name: 'Color',
      control: 'color',
    },
    search: {
      name: 'Search',
      control: 'text',
    },
  },
};

export default meta;

// endregion Meta

// region Stories

export const All: StoryObj<Args> = {
  render({ currentColor, search }) {
    return <Grid icons={UiNodeSIcons} currentColor={currentColor} search={search} />;
  },
};

export const Default: StoryObj = {
  tags: ['!dev'],
};

export const Color: StoryObj = {
  args: {
    style: {
      color: 'blue',
    },
  },

  tags: ['!dev'],
};

export const Branded: StoryObj<ComponentProps<typeof UiNodeSIcons.UiPostgresSourceSIcon>> = {
  render() {
    return <UiPostgresSourceSIcon />;
  },

  tags: ['!dev'],
};

export const SizeWithClassName: StoryObj = {
  args: {
    className: iconSize,
  },

  tags: ['!dev'],
};

export const SizeWithStyle: StoryObj = {
  args: {
    style: iconSizeStyle,
  },

  tags: ['!dev'],
};

// endregion Stories
