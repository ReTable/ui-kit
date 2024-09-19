import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

import { PromptInputController } from '../types';

export function useController(ref: Ref<PromptInputController>): RefObject<HTMLTextAreaElement> {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current?.focus();
      },

      blur: () => {
        inputRef.current?.blur();
      },

      select: () => {
        inputRef.current?.select();
      },
    }),
    [],
  );

  return inputRef;
}
