import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { ClearHandler, Option, Selected, TagRenderer } from '../types';

import { useTags } from './Tags.hooks';

type Props = {
  allowsCustomValue?: boolean;
  isDisabled?: boolean;
  onClear: ClearHandler;
  options: Option[];
  renderTag: TagRenderer;
  selected: Selected;
};

export function Tags({
  allowsCustomValue,
  isDisabled,
  onClear,
  options,
  selected,
  renderTag,
}: Props): ReactNode {
  const tags = useTags({ allowsCustomValue, options, selected });

  return (
    <div className={clsx(styles.root, isDisabled && styles.isDisabled)}>
      {!isDisabled && tags.length > 0 && <Clear className={styles.clear} onClear={onClear} />}

      {tags.map((it) => renderTag(styles.tag, it))}
    </div>
  );
}
