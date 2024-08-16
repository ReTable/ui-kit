import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiSwitch.css';

export type Props = {
  className?: string;
};

export function UiSwitch({ className = '' }: Props): ReactNode {
  return <div className={clsx(styles.root, className)} />;
}

if (import.meta.env.DEV) {
  UiSwitch.displayName = 'ui-switch(UiSwitch)';
}
