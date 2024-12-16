import { useCallback } from 'react';

import { ChangeHandler, SearchHandler, Selected, UpdateHandler } from '../../types';

type Options = {
  maxSelectedLimit?: number;
  onChange: ChangeHandler;
  onSearch: SearchHandler;
  selected: Selected;
};

export function useUpdateHandler({
  maxSelectedLimit,
  onChange,
  onSearch,
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
            if (maxSelectedLimit != null && next.size >= maxSelectedLimit) {
              break;
            }

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
    },
    [selected, onChange, onSearch, maxSelectedLimit],
  );
}
