import { FC } from 'react';

import { Meta } from '@storybook/react';

import * as Components from '~';

import { container, icon, root } from './styles.css';

// region Args

type Args = {
  currentColor: string;
  search: string;
};

// endregion

// region Meta

const meta: Meta = {
  title: 'Icons',

  argTypes: {
    currentColor: {
      name: 'Color',
      control: 'color',
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

export const Icons: FC<Args> = ({ currentColor, search }) => {
  const icons = Object.entries(Components)
    .filter(([iconName]) => iconName.includes(search))
    .map(([iconName, Icon]) => (
      <div className={container} key={iconName}>
        <Icon className={icon} />
        {iconName}
      </div>
    ));

  return (
    <div className={root} style={{ color: currentColor }}>
      {icons}
    </div>
  );
};

// endregion
