import { useMemo, useState } from 'react';

type Options = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  isEmpty: boolean;
};

type Result = {
  isVisible: boolean;
  search: string;
  placeholder?: string;
  onSearch: (search: string) => void;
};

export function useSearch({
  defaultPlaceholder,
  emptyPlaceholder,
  isDisabled,
  isEmpty,
}: Options): Result {
  const [search, setSearch] = useState('');

  const placeholder = useMemo(() => {
    if (isDisabled) {
      return isEmpty ? emptyPlaceholder : '';
    }

    return defaultPlaceholder;
  }, [defaultPlaceholder, emptyPlaceholder, isDisabled, isEmpty]);

  const isVisible = !isDisabled || isEmpty;

  return { isVisible, search, onSearch: setSearch, placeholder };
}
