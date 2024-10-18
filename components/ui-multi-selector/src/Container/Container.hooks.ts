import { useState } from 'react';

type Options = {
  isDisabled?: boolean;
  isEmpty: boolean;
};

type Result = {
  isVisible: boolean;
  search: string;
  placeholder?: string;
  onSearch: (search: string) => void;
};

export function useSearch({ isDisabled, isEmpty }: Options): Result {
  const [search, setSearch] = useState('');

  const isVisible = !isDisabled || isEmpty;

  return { isVisible, search, onSearch: setSearch };
}
