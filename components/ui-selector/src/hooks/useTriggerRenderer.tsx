import { useCallback } from 'react';

import { SelectorTriggerContent } from '../Selector.TriggerContent';
import { Item, ItemConfigGetter, OptionItem, TriggerRenderer } from '../Selector.types';

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

      return <SelectorTriggerContent {...itemConfig} />;
    }

    return <SelectorTriggerContent {...params.itemConfig} />;
  }, [params]);
}
