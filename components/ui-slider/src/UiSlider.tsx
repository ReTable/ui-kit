import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiSlider.css';

export type Props = {
  className?: string;
};

export function UiSlider({ className = '' }: Props): ReactNode {
  return <div className={clsx(styles.root, className)} />;
}

if (import.meta.env.DEV) {
  UiSlider.displayName = 'ui-slider(UiSlider)';
}
