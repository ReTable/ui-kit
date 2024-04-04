import { ChangeEventHandler, RefObject, useCallback, useEffect, useRef } from 'react';

type Options = {
  isIndeterminate: boolean;
  onChange?: (isChecked: boolean) => void;
};

type Result = [RefObject<HTMLInputElement>, ChangeEventHandler<HTMLInputElement>];

export function useLifecycle({ isIndeterminate, onChange }: Options): Result {
  const ref = useRef<HTMLInputElement>(null);

  // NOTE: Sets the `indeterminate` flag directly to the HTML element, because React doesn't support `indeterminate`
  //       property natively.
  useEffect(() => {
    const { current: input } = ref;

    if (input == null) {
      return;
    }

    input.indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      onChange?.(target.checked);
    },
    [onChange],
  );

  return [ref, handleChange];
}
