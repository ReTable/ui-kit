import { useEffect } from 'react';

import { usePreviousValue } from '@tabula/use-previous-value';

export function useSideEffect(
  flag: boolean | undefined,
  callback: () => void,
  reverse = false,
): void {
  const previousFlag = usePreviousValue(flag);

  useEffect(() => {
    if (!reverse && !previousFlag && flag) {
      callback();
    }

    if (reverse && previousFlag && !flag) {
      callback();
    }
  }, [previousFlag, flag, callback, reverse]);
}
