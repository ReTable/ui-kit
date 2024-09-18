import { PropsWithChildren, ReactNode } from 'react';

import * as styles from './Container.css';

type Props = PropsWithChildren<{
  variant: keyof typeof styles.variants;
}>;

export function Container({ children, variant }: Props): ReactNode {
  return <div className={styles.variants[variant]}>{children}</div>;
}
