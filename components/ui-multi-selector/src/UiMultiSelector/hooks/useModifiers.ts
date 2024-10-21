import { RefObject, useCallback } from 'react';

import {
  AddHandler,
  ChangeHandler,
  ClearHandler,
  RemoveHandler,
  SearchHandler,
  Selected,
} from '../../types';

type Options = {
  onChange: ChangeHandler;
  onSearch: SearchHandler;
  searchRef: RefObject<HTMLInputElement>;
  selected: Selected;
};

type Result = {
  onAdd: AddHandler;
  onRemove: RemoveHandler;
  onClear: ClearHandler;
};

export function useModifiers({ onChange, onSearch, searchRef, selected }: Options): Result {
  const handleChange = useCallback<ChangeHandler>(
    (next) => {
      onChange(next);

      onSearch('');

      searchRef.current?.focus();
    },
    [onChange, onSearch, searchRef],
  );

  const handleAdd = useCallback<AddHandler>(
    (values): void => {
      const next = new Set(selected);

      for (const value of values) {
        next.add(value);
      }

      handleChange(next);
    },
    [selected, handleChange],
  );

  const handleRemove = useCallback<RemoveHandler>(
    (value): void => {
      const next = new Set(selected);

      next.delete(value);

      handleChange(next);
    },
    [selected, handleChange],
  );

  const handleClear = useCallback<ClearHandler>((): void => {
    handleChange(new Set());
  }, [handleChange]);

  return { onAdd: handleAdd, onRemove: handleRemove, onClear: handleClear };
}
