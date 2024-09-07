import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiSelector.css';

export type Props = {
  className?: string;
};

export function UiSelector({ className = '' }: Props): ReactNode {
  return <div className={clsx(styles.root, className)} />;
}

if (import.meta.env.DEV) {
  UiSelector.displayName = 'ui-selector(UiSelector)';
}
