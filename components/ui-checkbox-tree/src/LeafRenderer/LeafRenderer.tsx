import { ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';

import * as styles from './LeafRenderer.css';

import { useItemStyle } from '../hooks';

type Props = {
  isChecked: boolean;
  label: string;
  level: number;
  onChange: (isChecked: boolean) => void;
};

export function LeafRenderer({ isChecked, label, level, onChange }: Props): ReactNode {
  const style = useItemStyle(level);

  return (
    <UiCheckbox className={styles.checkbox} isChecked={isChecked} onChange={onChange} style={style}>
      {label}
    </UiCheckbox>
  );
}
