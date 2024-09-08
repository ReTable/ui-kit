import { useCallback, useRef, useState } from 'react';

import { ChangeValueHandler, ClearValueHandler, InputElement, InputRef } from './Search.types';

type Result = [string, ChangeValueHandler, ClearValueHandler, InputRef];

export function useSearch(): Result {
  const [value, setValue] = useState('');
  const ref = useRef<InputElement>(null);

  const changeSearchHandler = useCallback<ChangeValueHandler>((event) => {
    setValue(event.target.value);
  }, []);

  const clearSearchHandler = useCallback<ClearValueHandler>((event, focusToField) => {
    if (event) {
      event.stopPropagation();
    }

    if (focusToField && ref.current !== null) {
      ref.current.focus();
    }

    setValue('');
  }, []);

  return [value, changeSearchHandler, clearSearchHandler, ref];
}
