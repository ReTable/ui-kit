import { ReactNode } from 'react';

import * as styles from './Toolbar.css';

import { ToolbarItem } from '../types';

import { Action } from './Toolbar.Action';
import { Divider } from './Toolbar.Divider';
import { Toggle } from './Toolbar.Toggle';

type Props = {
  items: ToolbarItem[];
};

export function Toolbar({ items }: Props): ReactNode {
  const content = items.map((it) => {
    switch (it.type) {
      case 'action': {
        const { id, icon, label, onAction } = it;

        return <Action key={id} icon={icon} label={label} onAction={onAction} />;
      }
      case 'divider': {
        return <Divider key={it.id} />;
      }
      case 'toggle': {
        const { icon, label, onToggle, value } = it;

        return <Toggle icon={icon} label={label} onToggle={onToggle} value={value} />;
      }
    }
  });

  return <div className={styles.root}>{content}</div>;
}

if (import.meta.env.DEV) {
  Toolbar.displayName = 'ui-ai-chat(Toolbar)';
}
