import { ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';
import { BranchComponentProps, TreeLeaf } from '@tabula/ui-tree';

import * as styles from './BranchRenderer.css';

import { Toggle } from '../Toggle';
import { useItemStyle } from '../hooks';

export function BranchRenderer<Leaf extends TreeLeaf>({
  isExpanded,
  level,
  onToggle,
}: BranchComponentProps<Leaf>): ReactNode {
  const style = useItemStyle(level);

  return (
    <div className={styles.root}>
      <Toggle className={styles.toggle} isExpanded={isExpanded} onToggle={onToggle} />
      <UiCheckbox className={styles.checkbox} isChecked={false} style={style} />
    </div>
  );
}
