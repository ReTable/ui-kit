import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ChevronIcon } from './assets/chevron.svg';

import * as styles from './Toggle.css';

type Props = {
  className?: string;

  isExpanded: boolean;

  onToggle: () => void;

  testId?: string;
};

export function Toggle({ className, isExpanded, onToggle, testId }: Props): ReactNode {
  return (
    <button
      className={clsx(styles.root, className)}
      data-testid={testId}
      onClick={onToggle}
      type="button"
    >
      <ChevronIcon className={isExpanded ? styles.chevron.expanded : styles.chevron.collapsed} />
    </button>
  );
}
