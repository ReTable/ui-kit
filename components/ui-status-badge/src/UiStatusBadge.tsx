import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiStatusBadge.css';

export type Props = {
  className?: string;
};

export function UiStatusBadge({ className = '' }: Props): ReactNode {
  return <div className={clsx(styles.root, className)} />;
}

if (import.meta.env.DEV) {
  UiStatusBadge.displayName = 'ui-status-badge(UiStatusBadge)';
}
