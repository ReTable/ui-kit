import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { Tag } from '../Tag';
import { ClearHandler, Option, RemoveHandler, Selected, Size, Variant } from '../types';

import { useTags } from './Tags.hooks';

type Props = {
  allowsCustomValue?: boolean;
  isDisabled?: boolean;
  onClear: ClearHandler;
  onRemove: RemoveHandler;
  options: Option[];
  selected: Selected;
  size: Size;
  variant: Variant;
};

export function Tags({
  allowsCustomValue,
  isDisabled,
  onClear,
  onRemove,
  options,
  selected,
  size,
  variant,
}: Props): ReactNode {
  const tags = useTags({ allowsCustomValue, options, selected });

  const nodes = tags.map((it) => {
    const { icon, label, value } = typeof it === 'string' ? { value: it } : it;

    return (
      <Tag
        className={styles.tag}
        icon={icon}
        isDisabled={isDisabled}
        key={value}
        label={label}
        onRemove={onRemove}
        size={size}
        value={value}
        variant={variant}
      />
    );
  });

  return (
    <div className={clsx(styles.root, styles.sizes[size], isDisabled && styles.isDisabled)}>
      {!isDisabled && tags.length > 0 && (
        <Clear className={styles.clear} onClear={onClear} variant={variant} size={size} />
      )}

      {nodes}
    </div>
  );
}
