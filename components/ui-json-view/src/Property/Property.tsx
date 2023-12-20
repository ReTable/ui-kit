import { FC } from 'react';

import { root } from './Property.css';

import { Property as PropertyType } from '../types';

type Props = {
  property?: PropertyType;
};

export const Property: FC<Props> = ({ property }) => {
  if (property == null) {
    return null;
  }

  const name = typeof property === 'number' ? property : JSON.stringify(property);

  return <span className={root}>{name}&nbsp;:&nbsp;</span>;
};
