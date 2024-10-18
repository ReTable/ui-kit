import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ClearIcon } from './assets/clear.svg';

import * as styles from './Clear.css';

import { useContext } from '../Context';

type Props = {
  className?: string;
};

export function Clear({ className }: Props): ReactNode {
  const { onClear, size, variant } = useContext();

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
