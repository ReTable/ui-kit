import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Suggestions.css';

import { Item } from './Suggestions.Item';

type Props = {
  className?: string;

  suggestions: string[];

  onSuggest: (suggestion: string) => void;
};

export function Suggestions({ className, suggestions, onSuggest }: Props): ReactNode {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.items}>
        {suggestions.map((it) => (
          <Item key={it} onSuggest={onSuggest} suggestion={it} />
        ))}
      </div>
    </div>
  );
}

if (import.meta.env.DEV) {
  Suggestions.displayName = 'ui-ai-chat(Suggestions)';
}
