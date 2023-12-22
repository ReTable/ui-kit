import { JsonPrimitiveValue, JsonValue } from '../../../types';

export function isPrimitiveValue(value: JsonValue): value is JsonPrimitiveValue {
  if (value == null) {
    return true;
  }

  const type = typeof value;

  return type === 'boolean' || type === 'number' || type === 'string';
}
