import { useCallback } from 'react';

import { AddHandler, ChangeHandler, ClearHandler, RemoveHandler, Selected } from '../../types';

type Options = {
  onChange?: ChangeHandler;
  selected: Selected;
};

type Result = {
  onAdd: AddHandler;
  onRemove: RemoveHandler;
  onClear: ClearHandler;
};

export function useModifiers({ onChange, selected }: Options): Result {
  const handleAdd = useCallback<AddHandler>(
    (values): void => {
      if (onChange == null) {
        return;
      }

      const next = new Set(selected);

      for (const value of values) {
        next.add(value);
      }

      onChange(next);
    },
    [selected, onChange],
  );

  const handleRemove = useCallback<RemoveHandler>(
    (value): void => {
      if (onChange == null) {
        return;
      }

      const next = new Set(selected);

      next.delete(value);

      onChange(next);
    },
    [selected, onChange],
  );

  const handleClear = useCallback<ClearHandler>((): void => {
    if (onChange == null) {
      return;
    }

    onChange(new Set());
  }, [onChange]);

  return { onAdd: handleAdd, onRemove: handleRemove, onClear: handleClear };
}
