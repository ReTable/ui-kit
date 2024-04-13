import { Meta, StoryObj } from '@storybook/react';

import { UiCheckboxTree } from '~';

// region Meta

const meta: Meta<typeof UiCheckboxTree> = {
  title: 'UiCheckboxTree',

  component: UiCheckboxTree,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof UiCheckboxTree>;

const staticParameters = {
  controls: {
    exclude: /.*/g,
    hideNoControlsWarning: true,
  },
};

// region Story Utilities

// region Stories

export const Default: Story = {
  args: {
    tree: [
      {
        id: 1,

        data: {
          isChecked: false,
          label: 'Top Level Leaf',
        },
      },
      {
        id: 2,

        data: {
          isChecked: false,
          label: 'Top Level Branch',
        },

        children: [
          {
            id: 3,

            data: {
              isChecked: false,
              label: 'Inner Level Leaf',
            },
          },
        ],
      },
    ],
  },
  parameters: staticParameters,
};

// endregion Stories
