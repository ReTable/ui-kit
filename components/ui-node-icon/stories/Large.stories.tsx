import { FC } from 'react';

import { Meta } from '@storybook/react';

import { UiNodeLIcons } from '~';

import { icon, iconContainer, root } from './styles.css';

// region Args

type Args = {
  isDisabled?: boolean;
  parentIsDisabled?: boolean;
  search?: string;
};

// endregion

// region Meta

const meta: Meta<Args> = {
  title: 'Large',

  argTypes: {
    isDisabled: {
      name: 'Is disabled?',
      control: 'boolean',
    },
    parentIsDisabled: {
      name: 'Parent is disabled?',
      control: 'boolean',
    },
    search: {
      name: 'Search',
      control: 'text',
    },
  },
};

export default meta;

// endregion

// region Stories

export const Icons: FC<Args> = ({ isDisabled, parentIsDisabled, search = '' }) => {
  const icons = Object.entries(UiNodeLIcons)
    .filter(([iconName]) => iconName.includes(search))
    .map(([iconName, Icon]) => (
      <button className={iconContainer} disabled={parentIsDisabled} key={iconName} type="button">
        <Icon className={icon} isDisabled={isDisabled} />
        {iconName}
      </button>
    ));

  return <div className={root}>{icons}</div>;
};

// endregion
