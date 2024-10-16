import { ComponentType, PropsWithChildren, ReactNode } from 'react';

import clsx from 'clsx';

import { ReactComponent as RemoveIcon } from './assets/remove.svg';

import * as styles from './UiTag.css';

export type Size = keyof typeof styles.sizes;

export type IconComponent = ComponentType<{ className?: string }>;

export type Props = PropsWithChildren<{
  className?: string;
  icon?: IconComponent;
  isDisabled?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  size: Size;
}>;

export function UiTag({
  children,
  className,
  icon: Icon,
  isDisabled,
  onClick,
  onRemove,
  size,
}: Props): ReactNode {
  const title = typeof children === 'string' ? children : '';

  const label = (
    <>
      {Icon != null && <Icon className={styles.icon} />}
      <span className={styles.label}>{children}</span>
    </>
  );

  const body =
    onClick == null ? (
      <div className={styles.body} title={title}>
        {label}
      </div>
    ) : (
      <button
        className={styles.body}
        disabled={isDisabled}
        onClick={onClick}
        title={title}
        type="button"
      >
        {label}
      </button>
    );

  return (
    <div
      className={clsx(styles.root, styles.sizes[size], isDisabled && styles.isDisabled, className)}
    >
      {body}
      {!isDisabled && onRemove != null && (
        <button className={styles.remove} onClick={onRemove} type="button">
          <RemoveIcon />
        </button>
      )}
    </div>
  );
}
