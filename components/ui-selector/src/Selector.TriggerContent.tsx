import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Selector.module.scss';

import { Item } from './Selector.types';

export function SelectorTriggerContent({
  contentClassName,
  title,
  content,
  leftIcon: LeftIcon,
  skipLeftIcon,
  rightIcon: RightIcon,
  skipRightIcon,
}: Item): ReactNode {
  return (
    <div className={clsx(styles.wrapper, title == null ? styles.singleLine : styles.multiLine)}>
      {LeftIcon && !skipLeftIcon && <LeftIcon className={clsx(styles.icon, styles.leftIcon)} />}
      <span className={clsx(styles.contentWrapper, contentClassName)}>
        {title && <b className={styles.title}>{title}</b>}
        <span className={styles.text}>{content}</span>
      </span>
      {RightIcon && !skipRightIcon && <RightIcon className={clsx(styles.icon, styles.rightIcon)} />}
    </div>
  );
}
