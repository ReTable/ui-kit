import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';

import { portalRootFor } from '@tabula/portal-root-for';
import { UiMenu, UiMenuProps } from '@tabula/ui-menu';

import * as styles from './Popup.css';

type Props = Pick<UiMenuProps, 'config' | 'emptyContent'> & {
  isVisible: boolean;
  onClick: MouseEventHandler;
  setRef: (node: HTMLElement | null) => void;
  style: CSSProperties;
};

const portalRoot = portalRootFor({ id: 'ui-selector' });

export function Popup({
  config,
  emptyContent,
  isVisible,
  onClick,
  setRef,
  style,
}: Props): ReactNode {
  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={clsx(styles.root, isVisible && styles.isVisible)}
      onClick={onClick}
      ref={setRef}
      style={style}
    >
      <UiMenu className={styles.menu} config={config} emptyContent={emptyContent} size="medium" />
    </div>,
    portalRoot,
  );
}

if (import.meta.env.DEV) {
  Popup.displayName = 'UiSelector(Popup)';
}
