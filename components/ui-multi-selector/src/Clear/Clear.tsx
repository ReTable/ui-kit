import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ClearIcon } from './assets/clear.svg';

import * as styles from './Clear.css';

import { ClearHandler } from '../types';

type Props = {
  className?: string;

  onClear: ClearHandler;
};

export function Clear({ className, onClear }: Props): ReactNode {
  return (
    <button className={clsx(styles.root, className)} onClick={onClear} type="button">
      <ClearIcon />
    </button>
  );
}
