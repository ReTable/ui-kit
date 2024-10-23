import { ReactNode, useCallback } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ClearIcon } from './assets/clear.svg';

import * as styles from './Clear.css';

import { UpdateHandler } from '../types';

type Props = {
  className?: string;

  onUpdate: UpdateHandler;
};

export function Clear({ className, onUpdate }: Props): ReactNode {
  const handleClick = useCallback(() => {
    onUpdate('remove-all', []);
  }, [onUpdate]);

  return (
    <button
      className={clsx(styles.root, className)}
      onClick={handleClick}
      tabIndex={-1}
      type="button"
    >
      <ClearIcon />
    </button>
  );
}
