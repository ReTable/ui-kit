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
        return [line.boolean, 'bool', value];
      }
      case 'number': {
        return [line.number, Number.isInteger(value) ? 'int' : 'float', value];
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

  return (
    <div className={className} style={style}>
      {parentKey != null && <span className={property}>{parentKey} : </span>}
      {showDataTypes && type != null && <span className={meta}>{type} </span>}
      {representation}
    </div>
  );
};
