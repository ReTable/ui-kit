import { Meta, StoryObj } from '@storybook/react';

import { UiStatusBadge } from '~';

import { CustomIcon } from './CustomIcon';

// region Meta

const meta: Meta<typeof UiStatusBadge> = {
  title: 'UiStatusBadge',

  component: UiStatusBadge,

  parameters: {
    controls: {
      include: /tree/g,
      hideNoControlsWarning: true,
    },
  },
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof UiStatusBadge>;

// region Story Utilities

// region Stories

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Active: Story = {
  args: {
    children: 'Active',
    variant: 'active',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Inactive: Story = {
  args: {
    children: 'Inactive',
    variant: 'inactive',
  },
};

export const SuccessWithoutIcon: Story = {
  args: {
    children: 'Success',
    icon: false,
    variant: 'success',
  },
};

export const ActiveWithoutIcon: Story = {
  args: {
    children: 'Active',
    icon: false,
    variant: 'active',
  },
};

export const ErrorWithoutIcon: Story = {
  args: {
    children: 'Error',
    icon: false,
    variant: 'error',
  },
};

export const InactiveWithoutIcon: Story = {
  args: {
    children: 'Inactive',
    icon: false,
    variant: 'inactive',
  },
};

export const SuccessWithCustomIcon: Story = {
  args: {
    children: 'Success',
    icon: CustomIcon,
    variant: 'success',
  },
};

export const ActiveWithCustomIcon: Story = {
  args: {
    children: 'Active',
    icon: CustomIcon,
    variant: 'active',
  },
};

export const ErrorWithCustomIcon: Story = {
  args: {
    children: 'Error',
    icon: CustomIcon,
    variant: 'error',
  },
};

export const InactiveWithCustomIcon: Story = {
  args: {
    children: 'Inactive',
    icon: CustomIcon,
    variant: 'inactive',
  },
};

// endregion Stories
