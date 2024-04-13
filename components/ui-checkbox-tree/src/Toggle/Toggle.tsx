import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ChevronIcon } from './assets/chevron.svg';

import * as styles from './Toggle.css';

type Props = {
  className?: string;

  isExpanded: boolean;

  onToggle: () => void;
};

export function Toggle({ className, isExpanded, onToggle }: Props): ReactNode {
  return (
    <button className={clsx(styles.root, className)} onClick={onToggle} type="button">
      <ChevronIcon className={isExpanded ? styles.chevron.expanded : styles.chevron.collapsed} />
    </button>
  );
}
