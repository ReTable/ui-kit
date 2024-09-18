import { PropsWithChildren, ReactNode } from 'react';

import { clsx } from 'clsx/lite';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CloseIcon } from './assets/close.svg';

import * as styles from './Drawer.css';

import { useKeyboardClose, useTransition } from './hooks';

type Props = PropsWithChildren<{
  className?: string;

  isOpened: boolean;

  onClose?: () => void;

  title: string;
}>;

export function Drawer({ children, className, isOpened, onClose, title }: Props): ReactNode {
  const [nodeRef, endListener] = useTransition();

  useKeyboardClose(onClose);

  return (
    <CSSTransition
      addEndListener={endListener}
      classNames={styles.transition}
      in={isOpened}
      mountOnEnter
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div className={clsx(styles.root, className)} aria-modal="true" ref={nodeRef}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */}
        <div className={styles.overlay} onClick={onClose} role="button" />
        <div className={styles.body}>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.close} onClick={onClose} type="button">
              <CloseIcon />
            </button>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
}

if (import.meta.env.DEV) {
  Drawer.displayName = 'ui-ai-chat(Drawer)';
}
