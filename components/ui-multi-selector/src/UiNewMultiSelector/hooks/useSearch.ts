import { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from 'react';

type Options = {
  isDisabled?: boolean;
  empty?: string;
  placeholder?: string;
  value: string[] | Set<string>;
};

type Result = {
  onSearch: ChangeEventHandler<HTMLInputElement>;
  search: string;
  searchPlaceholder?: string;
};

export function useSearch({ isDisabled, empty, placeholder, value }: Options): Result {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isDisabled) {
      setSearch('');
    }
  }, [isDisabled]);

  const handleSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(({ target }) => {
    setSearch(target.value);
  }, []);

  const searchPlaceholder = useMemo(() => {
    if (isDisabled) {
      const isEmpty = Array.isArray(value) ? value.length === 0 : value.size === 0;

      return isEmpty ? empty : '';
    }

    return placeholder;
  }, [empty, isDisabled, placeholder, value]);

  return { search, onSearch: handleSearch, searchPlaceholder };
}
