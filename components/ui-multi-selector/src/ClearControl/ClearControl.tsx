import { PropsWithChildren, ReactNode } from 'react';

import clsx from 'clsx';

import { ReactComponent as ClearIcon } from './assets/clear.svg';

import * as styles from './ClearControl.css';

type Props = PropsWithChildren<{
  className?: string;
  readOnly?: boolean;
  onClick: () => void;
}>;

export function ClearControl({ className, onClick, readOnly }: Props): ReactNode {
  return (
    <button
      className={clsx(styles.root, className)}
      disabled={readOnly}
      onClick={onClick}
      type="button"
    >
      <ClearIcon />
    </button>
  );
}
