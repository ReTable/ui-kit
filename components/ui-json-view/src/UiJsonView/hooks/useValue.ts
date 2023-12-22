import { useMemo } from 'react';

import { JsonValue } from '../../types';

export function useValue(source: string): [JsonValue, boolean] {
  return useMemo(() => {
    try {
      const value = JSON.parse(source) as JsonValue;

      return [value, true];
    } catch {
      return [null, false];
    }
  }, [source]);
}
