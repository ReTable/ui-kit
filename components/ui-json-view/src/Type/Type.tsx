import { FC } from 'react';

import { root } from './Type.css';

import { useOptions } from '../OptionsProvider';
import { PrimitiveType } from '../types';

type Props = {
  type: PrimitiveType;
};

export const Type: FC<Props> = ({ type }) => {
  const { showDataTypes } = useOptions();

  if (!showDataTypes || type === 'null') {
    return null;
  }

  return <span className={root}>{type}&nbsp;</span>;
};
