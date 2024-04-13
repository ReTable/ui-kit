import { ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';
import { LeafComponentProps } from '@tabula/ui-tree';

import * as styles from './Leaf.css';

import { useItemStyle } from '../hooks';
import { BaseData, BaseId } from '../types';

export function Leaf<Id extends BaseId, Data extends BaseData>({
  level,
  data,
}: LeafComponentProps<Id, Data>): ReactNode {
  const style = useItemStyle(level);

  return (
    <UiCheckbox className={styles.checkbox} isChecked={data.isChecked} style={style}>
      {data.label}
    </UiCheckbox>
  );
}
