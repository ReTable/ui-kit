import { FC, useMemo } from 'react';

import { line, meta, property } from './style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';
import { JsonPrimitiveValue } from '../types';

import { useLevel } from './useLevel';

type Props = {
  level: number;
  parentKey?: number | string;
  value: JsonPrimitiveValue;
};

type Representation = [string, null | string, boolean | number | string];

function useRepresentation(value: JsonPrimitiveValue): Representation {
  return useMemo(() => {
    if (value == null) {
      return [line.null, null, 'null'];
    }

    switch (typeof value) {
      case 'boolean': {
        return [line.boolean, 'bool', value.toString()];
      }
      case 'number': {
        return [line.number, Number.isInteger(value) ? 'int' : 'float', value.toString()];
      }
      default: {
        return [line.string, 'string', value];
      }
    }
  }, [value]);
}

export const UiPrimitive: FC<Props> = ({ level, parentKey, value }) => {
  const { showDataTypes } = useJsonViewOptions();
  const style = useLevel(level);

  const [className, type, representation] = useRepresentation(value);

  let propertyName: number | string | null = null;

  if (parentKey != null) {
    propertyName = typeof parentKey === 'number' ? parentKey : JSON.stringify(parentKey);
  }

  return (
    <div className={className} style={style}>
      {propertyName != null && <span className={property}>{propertyName}&nbsp;:&nbsp;</span>}
      {showDataTypes && type != null && <span className={meta}>{type}&nbsp;</span>}
      {representation}
    </div>
  );
};
