import { useCallback, useState } from 'react';

import { useAsyncState } from 'src/hooks/useAsyncState';

import { usePreviousValue } from '@tabula/use-previous-value';

import { OptionItem } from '../Selector.types';

import { BaseOptions, BaseResult } from './useSelector.types';
import { useSyncSelector } from './useSyncSelector';

type Options<T> = BaseOptions<T> & {
  loadOnHidden?: boolean;
  refresh?: boolean;
  optionsGetter(): Promise<Array<OptionItem<T>>>;
};

type Result = BaseResult & {
  loading: boolean;
  refreshing: boolean;
  onRefresh: () => void;
  showSearchField?: boolean;
  isVisible: boolean;
  onChangeVisibleTo(visibility: boolean): void;
};

export function useAsyncSelector<T>({
  optionsGetter,
  refresh,
  loadOnHidden = false,
  ...params
}: Options<T>): Result {
  const [isVisible, onChangeVisibleTo] = useState(false);
  const prevVisible = usePreviousValue(isVisible);

  const skipLoading = useCallback(
    () => !loadOnHidden && (prevVisible || !isVisible),
    [loadOnHidden, prevVisible, isVisible],
  );
  const skipWaiting = useCallback(
    () => Boolean(prevVisible && !isVisible),
    [prevVisible, isVisible],
  );

  const [options, loading, refreshing, onRefresh] = useAsyncState({
    initialState: [],
    initialLoading: false,
    skipLoading,
    skipWaiting,
    promise: optionsGetter,
    refresh,
  });

  const syncSelector = useSyncSelector({ ...params, options });

  return {
    ...syncSelector,
    isVisible,
    onChangeVisibleTo,
    loading,
    refreshing,
    onRefresh,
  };
}
