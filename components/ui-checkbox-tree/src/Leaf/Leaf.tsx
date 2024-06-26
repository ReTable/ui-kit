import { ReactNode } from 'react';

import { LeafComponentProps } from '@tabula/ui-tree';

import { Checkbox } from '../Checkbox';
import { useLeafState } from '../Context';
import { useItemStyle } from '../hooks';
import { TreeLeaf } from '../types';

export function Leaf<Leaf extends TreeLeaf>({
  level,
  node,
  testId,
}: LeafComponentProps<Leaf>): ReactNode {
  const { isChecked, isDisabled, label, onChange } = useLeafState(node);

  const style = useItemStyle(level);

  return (
    <Checkbox
      isChecked={isChecked}
      isDisabled={isDisabled}
      isIndeterminate={false}
      onChange={onChange}
      style={style}
      variant="leaf"
      testId={testId == null ? undefined : `${testId}--checkbox`}
    >
      {label}
    </Checkbox>
  );
}
