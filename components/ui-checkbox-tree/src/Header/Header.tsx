import { ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';
import { Tree, TreeLeaf } from '@tabula/ui-tree';

import * as styles from './Header.css';

import { ChangeHandler, Selected } from '../types';

import { useState } from './Header.hooks';

type Props<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  selected: Selected<Leaf>;

  onChange: ChangeHandler<Leaf>;
};

export function Header<Leaf extends TreeLeaf>({
  onChange,
  selected,
  tree,
}: Props<Leaf>): ReactNode {
  const [{ isChecked, isIndeterminate }, onChangeAll] = useState({ onChange, selected, tree });

  return (
    <div className={styles.root}>
      <UiCheckbox
        className={styles.checkbox}
        isChecked={isChecked}
        isIndeterminate={isIndeterminate}
        onChange={onChangeAll}
      >
        Select all
      </UiCheckbox>
    </div>
  );
}
