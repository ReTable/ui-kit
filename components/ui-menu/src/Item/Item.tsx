import { ReactNode, useCallback, useMemo } from 'react';

import clsx from 'clsx';

import { stopEvent } from '@tabula/dom-utils';

import * as styles from './Item.css';

import { ItemIcon } from '../ItemIcon';

import { ClickHandler, ItemProps, SelectItemHandler } from './Item.types';

type Props = ItemProps & {
  id: string;

  onSelect?: SelectItemHandler;
};

export function Item({
  className,
  content,
  contentClassName,
  disabled,
  htmlTitle,
  id,
  leftIcon,
  onClick,
  onMouseDown,
  onSelect,
  preventDefault = true,
  rightIcon,
  skipLeftIcon,
  skipRightIcon,
  stopPropagation,
  title,
  trackData,
  trackId,
}: Props): ReactNode {
  const clickHandler = useCallback<ClickHandler>(
    (event) => {
      stopEvent(event);

      if (onSelect != null) {
        onSelect(id);
        return;
      }

      onClick?.(event);
    },
    [id, onClick, onSelect],
  );

  const innerHtmlTitle = useMemo(() => {
    if (htmlTitle != null) {
      return htmlTitle;
    }

    if (typeof content === 'string') {
      return content;
    }

    return;
  }, [content, htmlTitle]);

  return (
    <button
      className={clsx(
        styles.root,
        title == null ? styles.lines.single : styles.lines.multiple,
        className,
      )}
      type="button"
      disabled={disabled}
      onClick={clickHandler}
      onMouseDown={onMouseDown}
      data-track-id={trackId}
      data-track-data={trackData}
      data-stop-propagation={stopPropagation}
      data-prevent-default={preventDefault}
      title={innerHtmlTitle}
    >
      <ItemIcon className={styles.leftIcon} icon={leftIcon} skipIcon={skipLeftIcon} />
      <span className={clsx(styles.content, contentClassName)}>
        {title && <b className={styles.title}>{title}</b>}
        <span className={styles.text}>{content}</span>
      </span>
      <ItemIcon className={styles.rightIcon} icon={rightIcon} skipIcon={skipRightIcon} />
    </button>
  );
}

if (import.meta.env.DEV) {
  Item.displayName = 'UiMenu(Item)';
}
