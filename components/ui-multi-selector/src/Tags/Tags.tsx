import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { Option, Selected, TagRenderer, UpdateHandler } from '../types';

import { useTags } from './Tags.hooks';

type Props = {
  allowsCustomValue?: boolean;
  isDisabled?: boolean;
  onUpdate: UpdateHandler;
  options: Option[];
  renderTag: TagRenderer;
  searchId: string;
  selected: Selected;
};

export function Tags({
  allowsCustomValue,
  isDisabled,
  onUpdate,
  options,
  renderTag,
  searchId,
  selected,
}: Props): ReactNode {
  const tags = useTags({ allowsCustomValue, options, selected });

  return (
    <div className={clsx(styles.root, isDisabled && styles.isDisabled)}>
      {/* NOTE: Allows to focus on search input when click on space between tags/clear button. */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {!isDisabled && <label className={styles.label} htmlFor={searchId} />}

      {!isDisabled && tags.length > 0 && <Clear className={styles.clear} onUpdate={onUpdate} />}

      {tags.map((it) => renderTag(styles.tag, it))}
    </div>
  );
}
