import { FC } from 'react';

import { property as root } from './style.css';

import { Property } from './types';

type Props = {
  property?: Property;
};

export const UiProperty: FC<Props> = ({ property }) => {
  if (property == null) {
    return null;
  }

  const name = typeof property === 'number' ? property : JSON.stringify(property);

  return <span className={root}>{name}&nbsp;:&nbsp;</span>;
};

UiProperty.displayName = 'UiJsonView(UiProperty)';
