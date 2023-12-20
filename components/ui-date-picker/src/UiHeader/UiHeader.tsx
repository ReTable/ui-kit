import { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

import * as styles from './UiHeader.css';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const UiHeader: FC<Props> = ({ className, children }) => (
  <div className={clsx(styles.root, className)}>{children}</div>
);

UiHeader.displayName = `ui-date-picker(UiHeader)`;
