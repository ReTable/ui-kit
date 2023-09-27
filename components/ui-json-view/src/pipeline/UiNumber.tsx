import { FC } from 'react';

import { root } from './UiNumber.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';

import { UiParentKey } from './UiParentKey';
import { UiType } from './UiType';

type Props = {
  level: number;
  parentKey?: number | string;
  value: number;
};

export const UiNumber: FC<Props> = ({ level, parentKey, value }) => {
  const { showServiceData } = useJsonViewOptions();

  return (
    <pre className={root}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiParentKey>{parentKey}</UiParentKey>}
      {showServiceData && <UiType>{Number.isInteger(value) ? 'int' : 'float'} </UiType>}
      {value}
    </pre>
  );
};
