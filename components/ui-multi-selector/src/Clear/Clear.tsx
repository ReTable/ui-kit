import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ClearIcon } from './assets/clear.svg';

import * as styles from './Clear.css';

import { ClearHandler, Size, Variant } from '../types';

type Props = {
  className?: string;

  onClear: ClearHandler;

  variant: Variant;
  size: Size;
};

export function Clear({ className, onClear, variant, size }: Props): ReactNode {
  return (
    <button
      className={clsx(styles.root, styles.sizes[size], styles.variants[variant], className)}
      onClick={onClear}
      type="button"
    >
      <ClearIcon />
    </button>
  );
}
