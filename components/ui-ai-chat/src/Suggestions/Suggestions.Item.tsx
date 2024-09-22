import { ReactNode, useCallback } from 'react';

import * as styles from './Suggestions.css';

type Props = {
  onSuggest: (suggestion: string) => void;

  suggestion: string;
};

export function Item({ onSuggest, suggestion }: Props): ReactNode {
  const handleClick = useCallback(() => {
    onSuggest(suggestion);
  }, [onSuggest, suggestion]);

  return (
    <button className={styles.item} onClick={handleClick} type="button">
      {suggestion}
    </button>
  );
}

if (import.meta.env.DEV) {
  Item.displayName = 'ui-ai-chat(Suggestions.Item)';
}
