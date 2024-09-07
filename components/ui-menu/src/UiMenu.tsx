import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiMenu.css';

export type Props = {
  className?: string;
};

export function UiMenu({ className = '' }: Props): ReactNode {
  return <div className={clsx(styles.root, className)} />;
}

if (import.meta.env.DEV) {
  UiMenu.displayName = 'ui-menu(UiMenu)';
}
