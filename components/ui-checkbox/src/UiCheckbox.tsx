import { PropsWithChildren, ReactNode } from 'react';

import clsx from 'clsx';

import { ReactComponent as CheckedIcon } from './assets/checked.svg';
import { ReactComponent as IndeterminateIcon } from './assets/indeterminate.svg';

import * as styles from './UiCheckbox.css';

import { useLifecycle } from './UiCheckbox.hooks';

export type Props = PropsWithChildren<{
  className?: string;
  id?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  name?: string;
  onChange?: (value: boolean) => void;
  trackId?: string;
}>;

export function UiCheckbox({
  children,
  className,
  id,
  isChecked = false,
  isDisabled,
  isIndeterminate = false,
  name,
  onChange,
  trackId,
}: Props): ReactNode {
  const [ref, handleChange] = useLifecycle({ isIndeterminate, onChange });

  // NOTE: The checked icon is visible when a user hover over the element.
  const Icon = isIndeterminate ? IndeterminateIcon : CheckedIcon;

  return (
    <label className={clsx(styles.root, className)} data-track-id={trackId} htmlFor={id}>
      <input
        checked={isChecked}
        className={styles.input}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={handleChange}
        ref={ref}
        type="checkbox"
      />
      <span className={styles.indicator}>
        <Icon className={styles.icon} />
      </span>
      <div className={styles.content}>{children}</div>
    </label>
  );
}

if (import.meta.env.DEV) {
  UiCheckbox.displayName = 'ui-checkbox(UiCheckbox)';
}
