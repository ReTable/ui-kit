import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

import { SearchController } from '../../types';

export function useController(controllerRef: Ref<SearchController>): RefObject<HTMLInputElement> {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    controllerRef,
    () => ({
      focus: () => {
        inputRef.current?.focus();
      },

      blur: () => {
        inputRef.current?.blur();
      },
    }),
    [],
  );

  return inputRef;
}
