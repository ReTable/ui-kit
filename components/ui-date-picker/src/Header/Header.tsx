import { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

import * as styles from './Header.css';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Header: FC<Props> = ({ className, children }) => (
  <div className={clsx(styles.root, className)}>{children}</div>
);
