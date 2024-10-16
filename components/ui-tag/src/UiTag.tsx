import { ComponentType, MouseEventHandler, ReactNode, useCallback } from 'react';

import clsx from 'clsx';

import { ReactComponent as CloseIcon } from './assets/close.svg';

import * as styles from './UiTag.css';

import { Root } from './Root';

type Size = keyof typeof styles.sizes;

type TagIconComponent = ComponentType<{ className?: string }>;

export type Props = {
  className?: string;
  icon?: TagIconComponent;
  infoClassName?: string;
  onClick?: () => void;
  onDelete?: () => void;
  readOnly?: boolean;
  size: Size;
  text: string;
};

// TODO: Root can be `button`. It may conflict with nested `button` close element.
//       Markup should be changed to remove nesting in that case.
export function UiTag({
  className,
  icon: Icon,
  infoClassName,
  onClick,
  onDelete,
  readOnly = false,
  size,
  text,
}: Props): ReactNode {
  const deleteHandler = useCallback<MouseEventHandler>(
    (event) => {
      if (!onDelete) {
        return;
      }

      event.stopPropagation();

      onDelete();
    },
    [onDelete],
  );

  return (
    <Root
      className={clsx(styles.root, styles.sizes[size], readOnly && styles.readOnly, className)}
      onClick={onClick}
      readOnly={readOnly}
    >
      <div className={styles.body}>
        {size === 'medium' && <span className={clsx(styles.infoColor, infoClassName)} />}
        {Icon && (
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} />
          </div>
        )}
        <span className={styles.text}>{text}</span>
        {onDelete && (
          <button className={styles.close} type="button" onClick={deleteHandler}>
            <CloseIcon />
          </button>
        )}
      </div>
    </Root>
  );
}
