import { RefObject, useCallback, useEffect, useId, useRef, useState } from 'react';

import { SearchHandler } from '../../types';

type Result = {
  onEscape: () => void;
  onSearch: SearchHandler;
  search: string;
  searchId: string;
  searchRef: RefObject<HTMLInputElement>;
};

export function useSearch(isDisabled?: boolean): Result {
  const searchId = useId();

  const searchRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState('');

  // NOTE: Reset search input when control is disabled.
  useEffect(() => {
    if (isDisabled) {
      setSearch('');
    }
  }, [isDisabled]);

  // NOTE: Remove focus from search input when `Escape` has been pressed.
  const onEscape = useCallback(() => {
    searchRef.current?.blur();
  }, []);

  return { onEscape, onSearch: setSearch, search, searchId, searchRef };
}
