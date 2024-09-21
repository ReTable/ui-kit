import { ReactNode } from 'react';

import * as styles from './EmptyPlaceholder.css';

export function EmptyPlaceholder(): ReactNode {
  return <div className={styles.root}>Ask Universe your question!</div>;
}
