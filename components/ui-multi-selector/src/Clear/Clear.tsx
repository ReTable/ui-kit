import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ClearIcon } from './assets/clear.svg';

import * as styles from './Clear.css';

type Props = {
  className?: string;

  onClick: () => void;
};

export function Clear({ className, onClick }: Props): ReactNode {
  return (
    <button className={clsx(styles.root, className)} onClick={onClick} type="button">
      <ClearIcon />
    </button>
  );
}
