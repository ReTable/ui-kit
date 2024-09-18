import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Header.css';

import { Toolbar } from '../Toolbar';
import { ToolbarItem } from '../types';

type Props = {
  className?: string;

  children?: string;

  toolbarItems?: ToolbarItem[];
};

export function Header({ children, className, toolbarItems = [] }: Props): ReactNode {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.title}>{children}</div>
      <Toolbar items={toolbarItems} />
    </div>
  );
}

if (import.meta.env.DEV) {
  Header.displayName = 'ui-ai-chat(Header)';
}
