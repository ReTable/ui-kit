import { ReactNode } from 'react';

import { ReactComponent as CloseIcon } from './assets/close.svg';

import * as styles from './Settings.css';

type Props = {
  isOpened: boolean;

  onClose: () => void;
};

export function Settings({ isOpened, onClose }: Props): ReactNode {
  if (!isOpened) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.root}>
        <div className={styles.header}>
          <h2 className={styles.title}>Chat settings</h2>
          <button className={styles.close} onClick={onClose} type="button">
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
