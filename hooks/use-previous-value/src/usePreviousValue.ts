import { useEffect, useRef } from 'react';

export function usePreviousValue<T>(value: T | null): T | null {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
