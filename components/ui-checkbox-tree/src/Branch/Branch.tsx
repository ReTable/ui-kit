import { ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';
import { BranchComponentProps } from '@tabula/ui-tree';

import * as styles from './Branch.css';

import { Toggle } from '../Toggle';
import { useItemStyle } from '../hooks';
import { BaseData, BaseId } from '../types';

export function Branch<Id extends BaseId, Data extends BaseData>({
  data,
  isExpanded,
  level,
  onToggle,
}: BranchComponentProps<Id, Data>): ReactNode {
  const style = useItemStyle(level);

  return (
    <div className={styles.root}>
      <Toggle className={styles.toggle} isExpanded={isExpanded} onToggle={onToggle} />
      <UiCheckbox className={styles.checkbox} isChecked={data.isChecked} style={style}>
        {data.label}
      </UiCheckbox>
    </div>
  );
}
