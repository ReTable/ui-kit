import { ComponentType } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { UiTree, UiTreeProps } from '~';

import * as styles from './styles.css';

import * as trees from './trees';
import { Branch } from './Branch';
import { Leaf } from './Leaf';
import { Data } from './types';

// region Types

type StoryTree = ComponentType<UiTreeProps<Data, number>>;

// endregion Types

// region Meta

const meta: Meta<StoryTree> = {
  title: 'UiTree',

  component: UiTree,

  args: {
    className: styles.tree,

    branchComponent: Branch,
    leafComponent: Leaf,
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

// endregion Stories
