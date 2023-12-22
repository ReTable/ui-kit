import { FC } from 'react';

import { root } from './Type.css';

import { useOptions } from '../OptionsProvider';
import { ValueType } from '../types';

type Props = {
  type: ValueType;
};

export const Type: FC<Props> = ({ type }) => {
  const { showDataTypes } = useOptions();

  if (!showDataTypes || type === 'null') {
    return null;
  }

  return <span className={root}>{type}&nbsp;</span>;
};
