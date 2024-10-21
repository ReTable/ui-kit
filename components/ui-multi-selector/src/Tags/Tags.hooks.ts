import { useMemo } from 'react';

import { Option, Selected } from '../types';

type Options = {
  allowsCustomValue?: boolean;
  options: Option[];
  selected: Selected;
};

export function useTags({ allowsCustomValue, options, selected }: Options): Option[] {
  return useMemo(() => {
    const optionsMap = new Map<string, Option>();

    for (const option of options) {
      const value = typeof option === 'string' ? option : option.value;

      if (selected.has(value)) {
        optionsMap.set(value, option);
      }
    }

    const selectedOptions: Option[] = [];

    for (const value of selected) {
      const option = optionsMap.get(value);

      if (option == null) {
        if (allowsCustomValue) {
          selectedOptions.push(value);
        }
      } else {
        selectedOptions.push(option);
      }
    }

    return selectedOptions;
  }, [selected, options, allowsCustomValue]);
}
