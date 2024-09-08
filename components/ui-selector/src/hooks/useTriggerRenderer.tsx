import { useCallback } from 'react';

import { Item, ItemConfigGetter, OptionItem, TriggerRenderer } from '../Selector.types';
import { TriggerContent } from '../TriggerContent';

type OuterOptions = {
  itemConfig: Item;
};
type InnerOptions<T> = {
  value: T;
  options: Array<OptionItem<T>>;
  itemConfigGetter: ItemConfigGetter<T>;
};

type Options<T> = InnerOptions<T> | OuterOptions;

export function useTriggerRenderer<T>(params: Options<T>): TriggerRenderer {
  return useCallback(() => {
    if ('value' in params) {
      const { value: item, options, itemConfigGetter } = params;
      const itemConfig = itemConfigGetter({ item, isTrigger: true, options });

      if (itemConfig == null) {
        return null;
      }

      return <TriggerContent {...itemConfig} />;
    }

    return <TriggerContent {...params.itemConfig} />;
  }, [params]);
}
