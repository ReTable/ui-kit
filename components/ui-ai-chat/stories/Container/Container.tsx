import { PropsWithChildren, ReactNode } from 'react';

import * as styles from './Container.css';

export type Variant = keyof typeof styles.variants;

type Props = PropsWithChildren<{
  variant: Variant;
}>;

export function Container({ children, variant }: Props): ReactNode {
  return <div className={styles.variants[variant]}>{children}</div>;
}
