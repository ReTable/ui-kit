import { FC } from 'react';

import { Meta } from '@storybook/react';

import * as Components from '~/transformations';

import { container, icon, root } from './styles.css';

// region Args

type Args = {
  currentColor: string;
};

// endregion

// region Meta

const meta: Meta<Args> = {
  title: 'Transformations',

  argTypes: {
    currentColor: {
      control: 'color',
    },
  },
};

export default meta;

// endregion

// region Stories

export const Icons: FC<Args> = ({ currentColor }) => {
  const icons = Object.entries(Components).map(([iconName, Icon]) => (
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
