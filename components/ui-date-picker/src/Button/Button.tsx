import { HTMLProps, forwardRef } from 'react';

import clsx from 'clsx';

import * as styles from './Button.css';

export type Props = Omit<HTMLProps<HTMLButtonElement>, 'type'>;

export const Button = forwardRef<HTMLButtonElement, Props>(function UiButton(
  { children, className, ...props },
  ref,
) {
  return (
    <button className={clsx(styles.root, className)} ref={ref} type="button" {...props}>
      {children}
    </button>
  );
});
