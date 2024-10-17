import { ComponentType, ReactNode } from 'react';

import clsx from 'clsx';

import { UiTag } from '@tabula/ui-tag';

import * as styles from './UiMultiSelector.css';

import { AddControl, Props as AddControlProps } from '../AddControl';
import { ClearControl } from '../ClearControl';

export type Item = {
  key: string;
  icon?: ComponentType<{ className?: string }>;
  content: string;
  onRemove: () => void;
};

export type Props = {
  className?: string;
  items: Item[];
  placeholder: string;
  readOnly?: boolean;
  onClear: () => void;
} & Pick<AddControlProps, 'config' | 'defaultItem' | 'emptyContent' | 'triggerContent'>;

export function UiMultiSelector({
  className,
  items,
  config,
  defaultItem,
  placeholder,
  emptyContent,
  triggerContent,
  readOnly = false,
  onClear,
}: Props): ReactNode {
  const isEmpty = items.length === 0;
  const showAddControl = config.length > 0 && !readOnly;

  if (isEmpty && readOnly) {
    return <div className={styles.placeholder}>{placeholder}</div>;
  }

  return (
    <div
      className={clsx(styles.root, isEmpty && styles.empty, readOnly && styles.disabled, className)}
    >
      <div className={styles.wrapper}>
        {items.map((item) => (
          <UiTag
            key={item.key}
            className={styles.item}
            icon={item.icon}
            onRemove={item.onRemove}
            isDisabled={readOnly}
            size="small"
            variant="contrast"
          >
            {item.content}
          </UiTag>
        ))}
      </div>
      <ClearControl className={styles.clear} onClick={onClear} readOnly={readOnly} />
      {showAddControl && (
        <div className={styles.add}>
          <AddControl
            config={config}
            defaultItem={defaultItem}
            isEmpty={isEmpty}
            emptyContent={emptyContent}
            triggerContent={triggerContent}
          />
        </div>
      )}
    </div>
  );
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
