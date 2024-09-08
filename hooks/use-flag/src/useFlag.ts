import { useMemo, useState } from 'react';

type Controls = {
  change: (value: boolean) => void;
  toggle: () => void;
  on: () => void;
  off: () => void;
};

export function useFlag(defaultValue: boolean): [boolean, Controls] {
  const [flag, setFlag] = useState(defaultValue);

  const controls = useMemo(
    () => ({
      change: setFlag,

      toggle() {
        setFlag((value) => !value);
      },

      on() {
        setFlag(true);
      },

      off() {
        setFlag(false);
      },
    }),
    [],
  );

  return [flag, controls];
}
