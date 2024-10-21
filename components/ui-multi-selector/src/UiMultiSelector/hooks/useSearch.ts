import { Ref, useCallback, useEffect, useRef, useState } from 'react';

import { SearchHandler } from '../../types';

type Result = {
  onEscape: () => void;
  onSearch: SearchHandler;
  search: string;
  searchRef: Ref<HTMLInputElement>;
};

export function useSearch(isDisabled?: boolean): Result {
  const searchRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isDisabled) {
      setSearch('');
    }
  }, [isDisabled]);

  // NOTE: Remove focus from search input when `Escape` has been pressed.
  const onEscape = useCallback(() => {
    searchRef.current?.blur();
  }, []);

  return { onEscape, onSearch: setSearch, search, searchRef };
}
