import { JsonValue } from '../types';

import { PrimitiveValue } from './types';

export function isPrimitiveValue(value: JsonValue): value is PrimitiveValue {
  if (value == null) {
    return true;
  }

  const type = typeof value;

  return type === 'boolean' || type === 'number' || type === 'string';
}
