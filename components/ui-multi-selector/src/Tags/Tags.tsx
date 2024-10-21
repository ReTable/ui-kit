import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { Tag } from '../Tag';
import { ClearHandler, Option, RemoveHandler, Selected, Size, Variant } from '../types';

type Props = {
  isDisabled?: boolean;
  onClear: ClearHandler;
  onRemove: RemoveHandler;
  options: Option[];
  selected: Selected;
  size: Size;
  variant: Variant;
};

export function Tags({
  isDisabled,
  onClear,
  onRemove,
  options,
  selected,
  size,
  variant,
}: Props): ReactNode {
  const tags = options.reduce<ReactNode[]>((nodes, it) => {
    const { icon, label, value } = typeof it === 'string' ? { value: it } : it;

    if (selected.has(value)) {
      nodes.push(
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
        />,
      );
    }

    return nodes;
  }, []);

  return (
    <div className={clsx(styles.root, styles.sizes[size], isDisabled && styles.isDisabled)}>
      {!isDisabled && tags.length > 0 && (
        <Clear className={styles.clear} onClear={onClear} variant={variant} size={size} />
      )}

      {tags}
    </div>
  );
}
