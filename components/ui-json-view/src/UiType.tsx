import { FC } from 'react';

import { meta } from './style.css';

import { useOptions } from './UiOptions';
import { ValueType } from './types';

type Props = {
  type: ValueType;
};

export const UiType: FC<Props> = ({ type }) => {
  const { showDataTypes } = useOptions();

  if (!showDataTypes || type === 'null') {
    return null;
  }

  return <span className={meta}>{type}&nbsp;</span>;
};

UiType.displayName = 'UiJsonView(UiType)';
