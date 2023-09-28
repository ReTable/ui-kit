import { FC } from 'react';

import { line, meta, property as propertyStyle } from '../style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';
import { ValueType } from '../types';

import { useLevel } from './useLevel';

type Props = {
  level: number;
  property?: number | string;
  type: ValueType;
  value: string;
};

export const UiValue: FC<Props> = ({ level, property, type, value }) => {
  const { showDataTypes } = useJsonViewOptions();
  const style = useLevel(level);

  let propertyName: number | string | null = null;

  if (property != null) {
    propertyName = typeof property === 'number' ? property : JSON.stringify(property);
  }

  return (
    <div className={line[type]} style={style}>
      {propertyName != null && <span className={propertyStyle}>{propertyName}&nbsp;:&nbsp;</span>}
      {showDataTypes && type != 'null' && <span className={meta}>{type}&nbsp;</span>}
      {value}
    </div>
  );
};
