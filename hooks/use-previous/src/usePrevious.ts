import { useRef } from 'react';

export type Options<T> = {
  onChanged?: (previous: T, current: T) => void;
  areEqual?: (previous: T, current: T) => boolean;
};

export function usePrevious<T>(value: T, { areEqual, onChanged }: Options<T> = {}): [T, boolean] {
  const ref = useRef<T>(value);

  const { current: previous } = ref;

  const wasChanged = areEqual == null ? previous !== value : !areEqual(previous, value);

  ref.current = value;

  if (wasChanged) {
    onChanged?.(previous, value);
  }

  return [previous, wasChanged];
}
