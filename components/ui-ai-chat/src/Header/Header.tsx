import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as CollapseIcon } from './assets/collapse.svg';
import { ReactComponent as EditIcon } from './assets/edit.svg';
import { ReactComponent as FullScreenIcon } from './assets/fullScreen.svg';
import { ReactComponent as SettingsIcon } from './assets/settings.svg';

import * as styles from './Header.css';

type Props = {
  className?: string;

  children?: string;

  onFullscreen?: () => void;
  onHide?: () => void;
  onOpenSettings?: () => void;
  onStartNewChat?: () => void;
};

export function Header({
  children,
  className,
  onFullscreen,
  onHide,
  onOpenSettings,
  onStartNewChat,
}: Props): ReactNode {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.title}>{children}</div>
      <div className={styles.actions}>
        {onStartNewChat && (
          <button
            className={styles.action}
            onClick={onStartNewChat}
            title="Start a new chat"
            type="button"
          >
            <EditIcon />
          </button>
        )}
        {onOpenSettings && (
          <button
            className={styles.action}
            onClick={onOpenSettings}
            title="Open settings"
            type="button"
          >
            <SettingsIcon />
          </button>
        )}
        <div className={styles.divider} />
        {onFullscreen && (
          <button className={styles.action} onClick={onFullscreen} title="Fullscreen" type="button">
            <FullScreenIcon />
          </button>
        )}
        {onHide != null && (
          <button className={styles.action} onClick={onHide} title="Hide" type="button">
            <CollapseIcon />
          </button>
        )}
      </div>
    </div>
  );
}

if (import.meta.env.DEV) {
  Header.displayName = 'ui-ai-chat(Header)';
}
