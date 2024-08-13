import { StoryObj } from '@storybook/react';

import { UiStatusBadge, UiStatusBadgeVariant } from '~';

// region Meta

type Args = {
  icon: boolean;
  customIcon: boolean;
  label: string;
};

const meta = {
  title: 'UiStatusBadge',

  component: UiStatusBadge,

  argTypes: {
    icon: {
      control: 'boolean',
      name: 'Show icon?',
    },

    customIcon: {
      control: 'boolean',
      name: 'Use custom icon?',
      if: {
        arg: 'icon',
        eq: true,
      },
    },

    label: {
      control: 'text',
      name: 'Label',
    },
  },

  args: {
    icon: true,
    customIcon: false,
  },

  parameters: {
    controls: {
      include: /(icon|Label)/,
    },
  },
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<Args>;

function createStory(initialLabel: string, variant: UiStatusBadgeVariant): Story {
  return {
    args: {
      label: initialLabel,
    },

    render({ icon, label }) {
      return (
        <UiStatusBadge icon={icon} variant={variant}>
          {label}
        </UiStatusBadge>
      );
    },
  };
}

// region Story Utilities

// region Stories

export const Success = createStory('Success', 'success');

export const Active = createStory('Active', 'active');

export const Error = createStory('Error', 'error');

export const Inactive = createStory('Inactive', 'inactive');

// endregion Stories
