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

export const DisabledLeafs: Story = {
  args: {
    tree: trees.disabledLeafs,
  },

  render({ tree }) {
    return <CheckboxTree tree={tree} />;
  },
};

export const DisabledHeader: Story = {
  args: {
    tree: trees.disabledHeader,
  },

  render({ tree }) {
    return <CheckboxTree tree={tree} />;
  },
};

export const DisabledBranch: Story = {
  args: {
    tree: trees.disabledBranch,
  },

  render({ tree }) {
    return <CheckboxTree tree={tree} />;
  },
};

export const DisabledChildren: Story = {
  args: {
    tree: trees.disabledChildren,
  },

  render({ tree }) {
    return <CheckboxTree tree={tree} />;
  },
};

// endregion Stories
