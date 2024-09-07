import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';
import { portalRootFor } from 'src/utilities/portal';

import { UiMenu, UiMenuProps } from '@tabula/ui-menu';

import styles from './Selector.module.scss';

type Props = Pick<UiMenuProps, 'config' | 'emptyContent'> & {
  setRef: (node: HTMLElement | null) => void;
  isVisible: boolean;
  style: CSSProperties;
  onClick: MouseEventHandler;
};

const portalRoot = portalRootFor({ id: 'selector' });

export function SelectorPopup({
  config,
  emptyContent,
  isVisible,
  onClick,
  setRef,
  style,
}: Props): ReactNode {
  return createPortal(
    <div
      ref={setRef}
      className={clsx(styles.popup, isVisible && styles.visible)}
      style={style}
      onClick={onClick}
    >
      <UiMenu className={styles.menu} config={config} size="medium" emptyContent={emptyContent} />
    </div>,
    portalRoot,
  );
}
