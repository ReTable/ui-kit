import { ComponentType, PropsWithChildren, ReactNode } from 'react';

import clsx from 'clsx';

import { ReactComponent as RemoveIcon } from './assets/remove.svg';

import * as styles from './UiTag.css';

export type Size = keyof typeof styles.sizes;

export type Variant = keyof typeof styles.variants;

export type IconComponent = ComponentType<{ className?: string }>;

export type Props = PropsWithChildren<{
  className?: string;
  icon?: IconComponent;
  isDisabled?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  removeTabIndex?: number;
  size: Size;
  tabIndex?: number;
  variant: Variant;
}>;

export function UiTag({
  children,
  className,
  icon: Icon,
  isDisabled,
  onClick,
  onRemove,
  removeTabIndex,
  size,
  tabIndex,
  variant,
}: Props): ReactNode {
  const title = typeof children === 'string' ? children : '';

  return (
    <div
      className={clsx(
        styles.root,
        styles.sizes[size],
        styles.variants[variant],
        isDisabled && styles.isDisabled,
        className,
      )}
    >
      {!isDisabled && onClick != null && (
        <button
          className={styles.main}
          disabled={isDisabled}
          onClick={onClick}
          tabIndex={tabIndex}
          title={title}
          type="button"
        />
      )}

      {Icon != null && <Icon className={styles.icon} />}
      <span className={styles.label}>{children}</span>

      {!isDisabled && onRemove != null && (
        <button
          className={styles.remove}
          onClick={onRemove}
          tabIndex={removeTabIndex}
          type="button"
        >
          <RemoveIcon />
        </button>
      )}
    </div>
  );
}
