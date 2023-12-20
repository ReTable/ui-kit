import { HTMLProps, forwardRef } from 'react';

import clsx from 'clsx';

import * as styles from './UiButton.css';

export type Props = Omit<HTMLProps<HTMLButtonElement>, 'type'>;

export const UiButton = forwardRef<HTMLButtonElement, Props>(function UiButton(
  { children, className, ...props },
  ref,
) {
  return (
    <button className={clsx(styles.root, className)} ref={ref} type="button" {...props}>
      {children}
    </button>
  );
});

UiButton.displayName = `ui-date-picker(UiButton)`;