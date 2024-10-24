import { RefObject, useCallback } from 'react';

import { ChangeHandler, SearchHandler, Selected, UpdateHandler } from '../../types';

type Options = {
  onChange: ChangeHandler;
  onSearch: SearchHandler;
  searchRef: RefObject<HTMLInputElement>;
  selected: Selected;
};

export function useUpdateHandler({
  onChange,
  onSearch,
  searchRef,
  selected,
}: Options): UpdateHandler {
  return useCallback<UpdateHandler>(
    (type, values) => {
      const next: Selected = new Set(selected);
      const difference: Selected = new Set();

      switch (type) {
        case 'add':
        case 'add-all':
        case 'add-found':
        case 'add-custom': {
          for (const value of values) {
            if (!next.has(value)) {
              difference.add(value);
            }

            next.add(value);
          }

          break;
        }
        case 'remove': {
          for (const value of values) {
            if (next.has(value)) {
              difference.add(value);
            }

            next.delete(value);
          }

          break;
        }
        case 'remove-all': {
          for (const value of selected) {
            difference.add(value);
          }

          next.clear();

          break;
        }
      }

      onChange(next, type, difference);

      onSearch('');

      searchRef.current?.focus();
    },
    [selected, onChange, onSearch, searchRef],
  );
}
