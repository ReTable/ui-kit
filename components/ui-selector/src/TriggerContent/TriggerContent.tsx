import { ReactNode } from 'react';

import clsx from 'clsx';

import * as styles from './TriggerContent.css';

import { Item } from '../Selector.types';

export function TriggerContent({
  content,
  contentClassName,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  skipLeftIcon,
  skipRightIcon,
  title,
}: Item): ReactNode {
  return (
    <div className={clsx(styles.root, title == null ? styles.lines.single : styles.lines.multiple)}>
      {LeftIcon && !skipLeftIcon && (
        <LeftIcon className={clsx(styles.icon, styles.iconVariants.left)} />
      )}
      <span className={clsx(styles.contentWrapper, contentClassName)}>
        {title && <b className={styles.title}>{title}</b>}
        <span className={styles.text}>{content}</span>
      </span>
      {RightIcon && !skipRightIcon && (
        <RightIcon className={clsx(styles.icon, styles.iconVariants.right)} />
      )}
    </div>
  );
}

if (import.meta.env.DEV) {
  TriggerContent.displayName = 'UiSelector(TriggerContent)';
}
