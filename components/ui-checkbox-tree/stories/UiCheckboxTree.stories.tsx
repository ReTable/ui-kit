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

        label: 'Top Level Leaf',
      },
      {
        id: 2,

        label: 'Top Level Branch',

        children: [
          {
            id: 3,

            label: 'Inner Level Leaf',
          },

          {
            id: 4,

            label: 'Inner Level Branch',

            children: [
              {
                id: 5,

                label: 'Depth Level Leaf 1',
              },
              {
                id: 6,

                label: 'Depth Level Leaf 2',
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

    const handleChange = (ids: number[], isChecked: boolean) => {
      setSelected((current) => {
        const next = new Set(current);

        if (isChecked) {
          ids.forEach((id) => next.add(id));
        } else {
          ids.forEach((id) => next.delete(id));
        }

        return next;
      });
    };

    return (
      <div style={{ width: '200px', height: '200px' }}>
        <UiCheckboxTree
          tree={tree}
          onChange={handleChange}
          selected={selected}
          labelOf={(it) => it.label}
        />
      </div>
    );
  },
};

// endregion Stories
