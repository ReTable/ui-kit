import { ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';

import * as styles from './BranchRenderer.css';

import { Toggle } from '../Toggle';
import { useItemStyle } from '../hooks';

type Props = {
  isChecked: boolean;
  isExpanded: boolean;
  isIndeterminate: boolean;
  label: string;
  level: number;
  onChange: (isChecked: boolean) => void;
  onToggle: () => void;
};

export function BranchRenderer({
  isChecked,
  isExpanded,
  isIndeterminate,
  label,
  level,
  onChange,
  onToggle,
}: Props): ReactNode {
  const style = useItemStyle(level);

  return (
    <div className={styles.root}>
      <Toggle className={styles.toggle} isExpanded={isExpanded} onToggle={onToggle} />
      <UiCheckbox
        className={styles.checkbox}
        isChecked={isChecked}
        isIndeterminate={isIndeterminate}
        onChange={onChange}
        style={style}
      >
        {label}
      </UiCheckbox>
    </div>
  );
}
