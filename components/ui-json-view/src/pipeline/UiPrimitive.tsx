import { FC, useMemo } from 'react';

import { line, meta, property as propertyStyle } from './style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';
import { JsonPrimitiveValue } from '../types';

import { useLevel } from './useLevel';

type Props = {
  level: number;
  property?: number | string;
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

export const UiPrimitive: FC<Props> = ({ level, property, value }) => {
  const { showDataTypes } = useJsonViewOptions();
  const style = useLevel(level);

  const [className, type, representation] = useRepresentation(value);

  let propertyName: number | string | null = null;

  if (property != null) {
    propertyName = typeof property === 'number' ? property : JSON.stringify(property);
  }

  return (
    <div className={className} style={style}>
      {propertyName != null && <span className={propertyStyle}>{propertyName}&nbsp;:&nbsp;</span>}
      {showDataTypes && type != null && <span className={meta}>{type}&nbsp;</span>}
      {representation}
    </div>
  );
};
