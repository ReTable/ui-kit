import { ChangeEventHandler, RefObject, useCallback, useRef } from 'react';

type Options = {
  isIndeterminate: boolean;
  onChange?: (isChecked: boolean) => void;
};

type Result = [RefObject<HTMLInputElement>, ChangeEventHandler<HTMLInputElement>];

export function useLifecycle({ isIndeterminate, onChange }: Options): Result {
  const ref = useRef<HTMLInputElement>(null);

  // NOTE: Sets the `indeterminate` flag directly to the HTML element, because React doesn't support `indeterminate`
  //       property natively.
  //
  //       We don't use `useEffect` here, to avoid the following use case:
  //
  //         - input initially is indeterminate;
  //         - user click by element;
  //         - outer logic keep input is indeterminate;
  //         - DOM element in same time can be not indeterminate;
  //         - because of `isIndeterminate` not changed, DOM element don't changed, and `indeterminate` attribute
  //           not changed.
  if (ref.current != null) {
    ref.current.indeterminate = Boolean(isIndeterminate);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      onChange?.(target.checked);
    },
    [onChange],
  );

  return [ref, handleChange];
}
