import { ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';
import { LeafComponentProps, TreeLeaf } from '@tabula/ui-tree';

import * as styles from './LeafRenderer.css';

import { useItemStyle } from '../hooks';

export function LeafRenderer<Leaf extends TreeLeaf>({
  level,
}: LeafComponentProps<Leaf>): ReactNode {
  const style = useItemStyle(level);

  return <UiCheckbox className={styles.checkbox} isChecked={false} style={style} />;
}
