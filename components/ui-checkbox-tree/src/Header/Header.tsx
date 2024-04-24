import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { UiCheckbox } from '@tabula/ui-checkbox';
import { Tree, TreeLeaf } from '@tabula/ui-tree';

import * as styles from './Header.css';

import { ChangeHandler, Selected } from '../types';

import { useState } from './Header.hooks';

type Props<Leaf extends TreeLeaf> = {
  className?: string;

  tree: Tree<Leaf>;

  selected: Selected<Leaf>;

  onChange: ChangeHandler<Leaf>;

  testId?: string;
};

export function Header<Leaf extends TreeLeaf>({
  className,
  onChange,
  selected,
  testId,
  tree,
}: Props<Leaf>): ReactNode {
  const [{ isChecked, isIndeterminate }, onChangeAll] = useState({ onChange, selected, tree });

  return (
    <UiCheckbox
      className={clsx(styles.root, className)}
      isChecked={isChecked}
      isIndeterminate={isIndeterminate}
      onChange={onChangeAll}
      testId={testId}
    >
      Select all
    </UiCheckbox>
  );
}
