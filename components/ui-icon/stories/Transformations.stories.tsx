import { FC } from 'react';

import { Meta } from '@storybook/react';

import * as LargeComponents from '~/transformations/large';
import * as MediumComponents from '~/transformations/medium';
import * as SmallComponents from '~/transformations/small';

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

export const SmallIcons: FC<Args> = ({ currentColor }) => {
  const icons = Object.entries(SmallComponents).map(([iconName, Icon]) => (
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

export const MediumIcons: FC<Args> = ({ currentColor }) => {
  const icons = Object.entries(MediumComponents).map(([iconName, Icon]) => (
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

export const LargeIcons: FC<Args> = ({ currentColor }) => {
  const icons = Object.entries(LargeComponents).map(([iconName, Icon]) => (
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
