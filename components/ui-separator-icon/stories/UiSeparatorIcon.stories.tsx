import { Meta, StoryObj } from '@storybook/react';

import { UiCommaIcon } from '~';

import { Icons } from './components';

// region Args

type Args = {
  currentColor: string;
  search: string;
};

// endregion

// region Meta

const meta: Meta = {
  title: 'Ui*Icon',

  component: UiCommaIcon,

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

// endregion

// region Stories

export const All: StoryObj<Args> = {
  render({ currentColor, search }) {
    return <Icons currentColor={currentColor} search={search} />;
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

export const SizeWithClassName: StoryObj = {
  args: {
    className: 'icon-size',
  },

  tags: ['!dev'],
};

export const SizeWithStyle: StoryObj = {
  args: {
    style: {
      width: '32px',
      height: '32px',
    },
  },

  tags: ['!dev'],
};

// endregion
