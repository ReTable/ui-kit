import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiMultiSelector.css';

export type Props = {
  className?: string;
};

export function UiMultiSelector({ className = '' }: Props): ReactNode {
  return <div className={clsx(styles.root, className)} />;
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
