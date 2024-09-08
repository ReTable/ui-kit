import { useEffect } from 'react';

import { usePreviousValue } from '@tabula/use-previous-value';

export function useSideEffect(
  flag: boolean | undefined,
  callback: () => void,
  reverse = false,
): void {
  const previous = usePreviousValue(flag);

  useEffect(() => {
    if (!reverse && !previous && flag) {
      callback();
    }

    if (reverse && previous && !flag) {
      callback();
    }
  }, [previous, flag, callback, reverse]);
}
