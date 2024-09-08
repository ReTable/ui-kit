import { useCallback, useRef, useState } from 'react';

import { ChangeValueHandler, ClearValueHandler, InputElement, InputRef } from './Search.types';

type Result = [string, ChangeValueHandler, ClearValueHandler, InputRef];

export function useSearch(): Result {
  const [value, setValueTo] = useState('');
  const ref = useRef<InputElement>(null);

  const changeSearchHandler = useCallback<ChangeValueHandler>((event) => {
    setValueTo(event.target.value);
  }, []);

  const clearSearchHandler = useCallback<ClearValueHandler>((event, focusToField) => {
    if (event) {
      event.stopPropagation();
    }

    if (focusToField && ref.current !== null) {
      ref.current.focus();
    }

    setValueTo('');
  }, []);

  return [value, changeSearchHandler, clearSearchHandler, ref];
}
