import { useMemo } from 'react';

import jp from 'jsonpath';

import { JsonValue, ReadByPath } from '../types';

type Result = [boolean, JsonValue, ReadByPath];

export function useValue(source: string): Result {
  return useMemo((): Result => {
    try {
      const value = JSON.parse(source) as JsonValue;

      const readByPath: ReadByPath = (path) => jp.value(value, path) as JsonValue;

      return [true, value, readByPath];
    } catch {
      return [false, null, () => null];
    }
  }, [source]);
}
