import { useCallback, useEffect, useRef, useState } from 'react';

import { useSideEffect } from '@tabula/use-side-effect';

type Options<S> = {
  initialState: S;
  initialLoading?: boolean;
  promise?: (refresh?: boolean) => Promise<S>;
  skipLoading?: () => boolean;
  skipWaiting?: () => boolean;
  refresh?: boolean;
  loadOnEachTime?: boolean;
};

type Result<S> = [state: S, loading: boolean, refreshing: boolean, onRefresh: () => void];

export function useAsyncState<S>({
  initialState,
  initialLoading,
  promise,
  skipLoading,
  skipWaiting,
  refresh: controlledRefresh,
  loadOnEachTime,
}: Options<S>): Result<S> {
  const mountedRef = useRef(false);
  const loadedOnceRef = useRef(false);

  const [state, setState] = useState<S>(initialState);
  const [loading, setLoading] = useState(initialLoading ?? true);
  const [refreshing, setRefreshing] = useState(false);

  // Step 1: create callbacks for fetch and re-fetch options

  const fetchOptions = useCallback(
    async (clearCache?: boolean) => {
      if (
        // NOTE: skip if hook don't have promise
        promise == null ||
        // NOTE: skip if loading is true by default on hook mounting and now promise is fetching
        (loading && mountedRef.current) ||
        // NOTE: skip if loading has already finished, and it isn't force fetch by clearCache
        (!clearCache && loadedOnceRef.current) ||
        // NOTE: skip by flag from parent if it isn't force fetch by clearCache
        (!clearCache && skipLoading?.())
      ) {
        return;
      }

      try {
        setLoading(true);
        const nextState = await promise(clearCache);
        if (mountedRef.current) {
          setState(nextState);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      } finally {
        if (mountedRef.current) {
          setLoading(false);
          loadedOnceRef.current = true;
        }
      }
    },
    [promise, loading, skipLoading],
  );

  const reFetchOptions = useCallback(async () => {
    setRefreshing(true);

    try {
      await fetchOptions(true);
    } finally {
      if (mountedRef.current) {
        setRefreshing(false);
      }
    }
  }, [fetchOptions]);

  // Step 2: execute fetch callback on each changes of it
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchOptions();
  }, [fetchOptions]);

  // Step 3: turn off loading state, when skipWaiting fn changed to true
  useEffect(() => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    let timeout: number | undefined = undefined;

    if (skipWaiting?.()) {
      timeout = window.setTimeout(() => {
        setLoading(false);

        if (loadOnEachTime) {
          loadedOnceRef.current = false;

          setState(initialState);
        }
      }, 200);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [initialState, loadOnEachTime, skipWaiting]);

  // Step 4: re-fetch state by controlled on parent refresh flag
  //         use prevControlledRefresh to avoid unwanted calling of reFetchOptions
  //         when controlledRefresh is true and dependencies of reFetchOptions have changes
  useSideEffect(controlledRefresh, () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    reFetchOptions();
  });

  // Step 5: toggle mounted flag for skipping state changes on unmounted hook
  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return [state, loading, refreshing, reFetchOptions];
}
