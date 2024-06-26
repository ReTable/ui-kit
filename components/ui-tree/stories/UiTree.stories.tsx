import { ComponentType } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { UiTree, UiTreeProps } from '~';

import * as styles from './styles.css';

import * as trees from './trees';
import { Branch } from './Branch';
import { Leaf } from './Leaf';
import { TreeWithSearch } from './TreeWithSearch';
import { Leaf as LeafType } from './types';

// region Types

type StoryTree = ComponentType<UiTreeProps<LeafType>>;

// endregion Types

// region Meta

const meta: Meta<StoryTree> = {
  title: 'UiTree',

  component: UiTree,

  args: {
    className: styles.tree,

    branch: Branch,
    leaf: Leaf,
  },

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

type Story = StoryObj<StoryTree>;

// endregion Story Utilities

// region Stories

export const List: Story = {
  args: {
    tree: trees.list,
  },
};

export const Tree: Story = {
  args: {
    tree: trees.tree,
  },
};

export const Search: Story = {
  args: {
    tree: trees.tree,
  },

  render({ tree }) {
    return <TreeWithSearch tree={tree} />;
  },
};

// endregion Stories
