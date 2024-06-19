import { Meta, StoryObj } from '@storybook/react';

import { UiCheckboxTree } from '~';

import * as trees from './trees';
import { CheckboxTree } from './CheckboxTree';
import { Leaf } from './types';

// region Meta

const meta: Meta<typeof UiCheckboxTree> = {
  title: 'UiCheckboxTree',

  component: UiCheckboxTree,

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

type Story = StoryObj<typeof UiCheckboxTree<Leaf>>;

// region Story Utilities

// region Stories

export const List: Story = {
  args: {
    tree: trees.list,
  },

  render({ tree }) {
    return <CheckboxTree tree={tree} />;
  },
};

export const Tree: Story = {
  args: {
    tree: trees.tree,
  },

  render({ tree }) {
    return <CheckboxTree tree={tree} />;
  },
};

export const Disabled: Story = {
  args: {
    tree: trees.disabled,
  },

  render({ tree }) {
    return <CheckboxTree tree={tree} />;
  },
};

// endregion Stories
