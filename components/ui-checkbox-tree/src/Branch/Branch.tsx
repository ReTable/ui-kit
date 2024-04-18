import { ReactNode } from 'react';

import { BranchComponentProps, TreeLeaf } from '@tabula/ui-tree';

import * as styles from './Branch.css';

import { Checkbox } from '../Checkbox';
import { useBranchState } from '../Context';
import { Toggle } from '../Toggle';
import { useItemStyle } from '../hooks';

export function Branch<Leaf extends TreeLeaf>({
  isExpanded,
  level,
  node,
  onToggle,
}: BranchComponentProps<Leaf>): ReactNode {
  const { isChecked, isIndeterminate, label, onChange } = useBranchState(node);

  const style = useItemStyle(level);

  return (
    <div className={styles.root} style={style}>
      <Toggle className={styles.toggle} isExpanded={isExpanded} onToggle={onToggle} />
      <Checkbox
        isChecked={isChecked}
        isIndeterminate={isIndeterminate}
        onChange={onChange}
        variant="branch"
      >
        {label}
      </Checkbox>
    </div>
  );
}
