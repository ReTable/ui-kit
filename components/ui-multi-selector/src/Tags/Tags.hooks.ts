import { useMemo } from 'react';

import { Option, Selected } from '../types';

type Options = {
  allowsCustomValue?: boolean;
  options: Option[];
  selected: Selected;
};

export function useTags({ allowsCustomValue, options, selected }: Options): Option[] {
  return useMemo(() => {
    const optionsMap = options.reduce((map, it) => {
      if (typeof it === 'string') {
        map.set(it, it);
      } else {
        map.set(it.value, it);
      }

      return map;
    }, new Map<string, Option>());

    const selectedOptions: Option[] = [];

    for (const value of selected) {
      const option = optionsMap.get(value);

      if (option == null) {
        if (allowsCustomValue) {
          selectedOptions.push(value);
        }
      } else {
        selectedOptions.push(value);
      }
    }

    return selectedOptions;
  }, [selected, options, allowsCustomValue]);
}
