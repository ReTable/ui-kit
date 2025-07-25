import { PropsWithChildren, ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { Option, Selected, TagRenderer, UpdateHandler } from '../types';

import { useTags } from './Tags.hooks';

type Props = PropsWithChildren<{
  allowsCustomValue?: boolean;
  isDisabled?: boolean;
  onUpdate: UpdateHandler;
  options: Option[];
  renderTag: TagRenderer;
  selected: Selected;
}>;

export function Tags({
  allowsCustomValue,
  children,
  isDisabled,
  onUpdate,
  options,
  renderTag,
  selected,
}: Props): ReactNode {
  const tags = useTags({ allowsCustomValue, options, selected });

  return (
    <div
      className={clsx(
        styles.root,
        isDisabled && styles.state.isDisabled,
        tags.length === 0 && styles.state.isEmpty,
      )}
    >
      <Clear className={styles.clear} onUpdate={onUpdate} />

      <div className={styles.list}>
        {tags.map((it) => renderTag(styles.tag, it))}

        {children}
      </div>
    </div>
  );
}
