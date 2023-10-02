import { useMemo } from 'react';

import jp from 'jsonpath';

import { JsonValue, OnActionFn, QueryFn } from '../types';

export function useActionHandler(value: JsonValue, isValid: boolean): OnActionFn {
  return useMemo(() => {
    if (!isValid) {
      return () => null;
    }

    const query: QueryFn = (jsonPath) => jp.value(value, jsonPath);

    return (jsonPath, action) => {
      action(jsonPath, query);
    };
  }, [value, isValid]);
}
