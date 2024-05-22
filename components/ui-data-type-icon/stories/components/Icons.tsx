import { FC, ReactNode } from 'react';

import * as Components from '~';

import { container, icon, root } from './styles.css';

type Props = {
  currentColor: string;
  search: string;
};

export const Icons: FC<Props> = ({ currentColor, search = '' }): ReactNode => {
  const icons = Object.entries(Components)
    .filter(([iconName]) => !iconName.endsWith('Url') && iconName.includes(search))
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
