import { PropsWithChildren, ReactNode } from 'react';

import * as styles from './Container.css';

export function Container({ children }: PropsWithChildren): ReactNode {
  return <div className={styles.root}>{children}</div>;
}
