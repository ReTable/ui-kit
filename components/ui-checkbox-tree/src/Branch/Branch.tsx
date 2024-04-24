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
  testId,
}: BranchComponentProps<Leaf>): ReactNode {
  const { isChecked, isIndeterminate, label, onChange } = useBranchState(node);

  const style = useItemStyle(level);

  const [checkboxTestId, toggleTestId] =
    testId == null ? [] : [`${testId}--checkbox`, `${testId}--toggle`];

  return (
    <div className={styles.root} data-testid={testId} style={style}>
      <Toggle
        className={styles.toggle}
        isExpanded={isExpanded}
        onToggle={onToggle}
        testId={toggleTestId}
      />
      <Checkbox
        isChecked={isChecked}
        isIndeterminate={isIndeterminate}
        onChange={onChange}
        testId={checkboxTestId}
        variant="branch"
      >
        {label}
      </Checkbox>
    </div>
  );
}
