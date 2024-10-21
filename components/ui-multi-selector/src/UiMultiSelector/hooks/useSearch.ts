import { useEffect, useState } from 'react';

import { SearchHandler } from '../../types';

export function useSearch(isDisabled?: boolean): [string, SearchHandler] {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isDisabled) {
      setSearch('');
    }
  }, [isDisabled]);

  return [search, setSearch];
}
