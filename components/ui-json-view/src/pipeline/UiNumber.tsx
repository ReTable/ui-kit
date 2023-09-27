import { FC } from 'react';

import { line } from './style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';

import { UiProperty } from './UiProperty';
import { UiType } from './UiType';

type Props = {
  level: number;
  parentKey?: number | string;
  value: number;
};

export const UiNumber: FC<Props> = ({ level, parentKey, value }) => {
  const { showDataTypes } = useJsonViewOptions();

  return (
    <pre className={line.number}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiProperty>{parentKey}</UiProperty>}
      {showDataTypes && <UiType>{Number.isInteger(value) ? 'int' : 'float'} </UiType>}
      {value}
    </pre>
  );
};
