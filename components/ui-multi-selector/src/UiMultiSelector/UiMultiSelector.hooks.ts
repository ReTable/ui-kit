import { useCallback } from 'react';

type Options = {
  onChange?: (value: Set<string>) => void;
  value: Set<string>;
};

type Result = {
  onAdd: (ids: string[]) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
};

export function useController({ onChange, value }: Options): Result {
  const handleAdd = useCallback(
    (ids: string[]): void => {
      if (onChange == null) {
        return;
      }

      const next = new Set(value);

      for (const id of ids) {
        next.add(id);
      }

      onChange(next);
    },
    [value, onChange],
  );

  const handleRemove = useCallback(
    (id: string): void => {
      if (onChange == null) {
        return;
      }

      const next = new Set(value);

      next.delete(id);

      onChange(next);
    },
    [value, onChange],
  );

  const handleClear = useCallback((): void => {
    if (onChange == null) {
      return;
    }

    onChange(new Set());
  }, [onChange]);

  return { onAdd: handleAdd, onRemove: handleRemove, onClear: handleClear };
}
