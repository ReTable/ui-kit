import { useMemo } from 'react';

import { Config, OptionItem } from '../Selector.types';
import { useTriggerRenderer } from '../hooks';

import { BaseOptions, BaseResult } from './useSelector.types';

type Options<T> = BaseOptions<T> & {
  options: Array<OptionItem<T>>;
};

export function useSyncSelector<T>({
  itemConfigGetter,
  minItemsForSearch,
  onChange,
  options,
  value,
}: Options<T>): BaseResult {
  const triggerRenderer = useTriggerRenderer({ value, options, itemConfigGetter });

  const config = useMemo(
    () =>
      options.reduce((acc: Config, item) => {
        if (typeof item === 'object' && item != null) {
          if ('divider' in item || 'menuTitle' in item) {
            acc.push(item);
            return acc;
          }
        }

        const itemConfig = itemConfigGetter({ item, options });

        if (itemConfig != null) {
          acc.push({
            ...itemConfig,
            onClick() {
              onChange(item);
            },
          });
        }

        return acc;
      }, []),
    [onChange, options, itemConfigGetter],
  );

  const showSearchField = useMemo(() => {
    if (minItemsForSearch == null) {
      return;
    }

    return options.length > minItemsForSearch;
  }, [minItemsForSearch, options]);

  return { config, showSearchField, triggerRenderer };
}
