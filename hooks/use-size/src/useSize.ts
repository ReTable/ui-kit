import { RefCallback, useCallback, useLayoutEffect, useState } from 'react';

import { Listener, observe } from './observe';
import { Size, updateSizeFromRect } from './size';

type Result<E> = [RefCallback<E>, Size];

const defaultSize: Size = {
  width: 0,
  height: 0,
};

export function useSize<E extends Element = Element>(initialSize: Size = defaultSize): Result<E> {
  const [target, setTarget] = useState<E | null>(null);
  const [size, setSize] = useState(initialSize);

  const handleRect = useCallback<Listener>((next) => {
    setSize((current) => updateSizeFromRect(current, next));
  }, []);

  useLayoutEffect(() => {
    if (target == null) {
      return;
    }

    handleRect(target.getBoundingClientRect());

    let didUnsubscribe = false;

    const handleResize = (rect: DOMRect) => {
      if (didUnsubscribe) {
        return;
      }

      handleRect(rect);
    };

    const unsubscribe = observe(target, handleResize);

    return () => {
      didUnsubscribe = true;

      unsubscribe();
    };
  }, [target, handleRect]);

  return [setTarget, size];
}
