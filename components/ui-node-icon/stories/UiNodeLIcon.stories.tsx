import { Meta, StoryObj } from '@storybook/react';

import { UiInnerJoinLIcon, UiNodeLIcons } from '~';

import { Grid, disabledContainer, iconSize, iconSizeStyle } from './components';

// region Args

type Args = {
  isDisabled?: boolean;
  isParentDisabled?: boolean;
  search?: string;
};

// endregion Args

// region Meta

const meta: Meta = {
  title: 'Ui*LIcons',

  component: UiInnerJoinLIcon,

  argTypes: {
    isDisabled: {
      name: 'Is disabled?',
      control: 'boolean',
    },
    isParentDisabled: {
      name: 'Is parent disabled?',
      control: 'boolean',
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
  render({ isDisabled, isParentDisabled, search }) {
    return (
      <Grid
        icons={UiNodeLIcons}
        isDisabled={isDisabled}
        isParentDisabled={isParentDisabled}
        search={search}
      />
    );
  },
};

export const Default: StoryObj = {
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

export const DisabledParent: StoryObj = {
  render() {
    return (
      <button className={disabledContainer} disabled type="button">
        <UiInnerJoinLIcon />
      </button>
    );
  },
};

export const Disabled: StoryObj = {
  args: {
    isDisabled: true,
  },

  tags: ['!dev'],
};

// endregion Stories
