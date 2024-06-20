import { ChangeEventHandler, RefObject, useCallback, useEffect, useRef } from 'react';

type Options = {
  isIndeterminate: boolean;
  onChange?: (isChecked: boolean) => void;
};

type Result = [RefObject<HTMLInputElement>, ChangeEventHandler<HTMLInputElement>];

function setIndeterminate(ref: RefObject<HTMLInputElement>, isIndeterminate: boolean) {
  if (ref.current != null) {
    ref.current.indeterminate = isIndeterminate;
  }
}

export function useLifecycle({ isIndeterminate, onChange }: Options): Result {
  const ref = useRef<HTMLInputElement>(null);

  // NOTE: We use `useEffect` to set `indeterminate` property on initial render.
  //
  //       And we should update `indeterminate` property on each render, because we can have case, when `isIndeterminate`
  //       will not change after click, but `indeterminate` property will be changed by the browser after handling
  //       click.
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setIndeterminate(ref, isIndeterminate);
  }, []);
  /* eslint-enable */

  setIndeterminate(ref, isIndeterminate);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      onChange?.(target.checked);
    },
    [onChange],
  );

  return [ref, handleChange];
}
