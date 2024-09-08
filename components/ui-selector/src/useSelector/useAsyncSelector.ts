import { useCallback, useState } from 'react';

import { useAsyncState } from '@tabula/use-async-state';
import { usePreviousValue } from '@tabula/use-previous-value';

import { OptionItem } from '../Selector.types';

import { BaseOptions, BaseResult } from './useSelector.types';
import { useSyncSelector } from './useSyncSelector';

type Options<T> = BaseOptions<T> & {
  loadOnHidden?: boolean;
  optionsGetter: () => Promise<Array<OptionItem<T>>>;
  refresh?: boolean;
};

type Result = BaseResult & {
  isVisible: boolean;
  loading: boolean;
  onChangeVisibleTo: (visibility: boolean) => void;
  onRefresh: () => void;
  refreshing: boolean;
  showSearchField?: boolean;
};

export function useAsyncSelector<T>({
  loadOnHidden = false,
  optionsGetter,
  refresh,
  ...params
}: Options<T>): Result {
  const [isVisible, setIsVisible] = useState(false);
  const prevVisible = usePreviousValue(isVisible);

  const skipLoading = useCallback(
    () => !loadOnHidden && (prevVisible ?? !isVisible),
    [loadOnHidden, prevVisible, isVisible],
  );
  const skipWaiting = useCallback(
    () => Boolean(prevVisible && !isVisible),
    [prevVisible, isVisible],
  );

  const [options, loading, refreshing, onRefresh] = useAsyncState({
    initialLoading: false,
    initialState: [],
    promise: optionsGetter,
    refresh,
    skipLoading,
    skipWaiting,
  });

  const syncSelector = useSyncSelector({ ...params, options });

  return {
    ...syncSelector,
    isVisible,
    loading,
    onChangeVisibleTo: setIsVisible,
    onRefresh,
    refreshing,
  };
}
