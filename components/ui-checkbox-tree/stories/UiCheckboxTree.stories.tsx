import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Tree } from '@tabula/tree-utils';

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

        label: 'Leaf (1)',
      },
      {
        id: 2,

        label: 'Branch (2)',

        children: [
          {
            id: 3,

            label: 'Leaf (3)',
          },

          {
            id: 4,

            label: 'Branch (4)',

            children: [
              {
                id: 5,

                label: 'Leaf (5)',
              },
              {
                id: 6,

                label: 'Leaf (6)',
              },
            ],
          },
        ],
      },
    ],
  },
  parameters: staticParameters,
  render({ tree }: { tree: Tree<{ id: number; label: string }> }) {
    const [selected, setSelected] = useState<Set<number>>(new Set());

    const handleChange = (s: any) => {
      console.log(s);

      setSelected(s);
    };

    return (
      <>
        {[...selected].toString()}
        <div style={{ width: '200px', height: '200px' }}>
          <UiCheckboxTree
            tree={tree}
            onChange={handleChange}
            selected={selected}
            labelOf={(it) => it.label}
          />
        </div>
      </>
    );
  },
};

// endregion Stories
