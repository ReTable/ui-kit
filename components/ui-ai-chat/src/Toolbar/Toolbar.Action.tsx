import { ReactNode, useCallback } from 'react';

import * as styles from './Toolbar.css';

import { ToolbarItemIcon } from '../types';

type Props = {
  icon: ToolbarItemIcon;
  label: string;

  onAction: () => void;
};

export function Action({ icon: Icon, label, onAction }: Props): ReactNode {
  const handleClick = useCallback(() => {
    onAction();
  }, [onAction]);

  return (
    <button className={styles.action} onClick={handleClick} title={label} type="button">
      <Icon className={styles.icon} />
    </button>
  );
}

if (import.meta.env.DEV) {
  Action.displayName = 'ui-ai-chat(ToolbarAction)';
}
