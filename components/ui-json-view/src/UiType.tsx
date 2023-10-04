import { FC } from 'react';

import { root } from './UiType.css';

import { useOptions } from './UiOptionsProvider';
import { ValueType } from './types';

type Props = {
  type: ValueType;
};

export const UiType: FC<Props> = ({ type }) => {
  const { showDataTypes } = useOptions();

  if (!showDataTypes || type === 'null') {
    return null;
  }

  return <span className={root}>{type}&nbsp;</span>;
};
