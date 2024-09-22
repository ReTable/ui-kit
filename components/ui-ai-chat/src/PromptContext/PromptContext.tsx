import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as RefIcon } from './assets/ref.svg';
import { ReactComponent as ResetIcon } from './assets/reset.svg';

import * as styles from './PromptContext.css';

type Props = {
  className?: string;

  onClear?: () => void;

  value: string;
};

export function PromptContext({ className, onClear, value }: Props): ReactNode {
  return (
    <div className={clsx(styles.root, className)}>
      <RefIcon className={styles.icon} />
      <div className={styles.context}>{value}</div>
      {onClear != null && (
        <button className={styles.reset} onClick={onClear} title="Clear context" type="button">
          <ResetIcon />
        </button>
      )}
    </div>
  );
}

if (import.meta.env.DEV) {
  PromptContext.displayName = 'ui-ai-chat(PromptContext)';
}
