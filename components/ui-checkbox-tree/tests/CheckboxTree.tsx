import { FC, useCallback, useState } from 'react';

import { ChangeHandler, LabelGetter, UiCheckboxTree } from '~';

import { Leaf, Tree } from './types';

type Props = {
  tree: Tree;

  selected?: Set<Leaf['id']>;

  labelOf: LabelGetter<Leaf>;

  onChange: ChangeHandler<Leaf>;

  testId: string;
};

export const CheckboxTree: FC<Props> = ({
  labelOf,
  onChange,
  selected: initialSelected,
  testId,
  tree,
}) => {
  const [selected, setSelected] = useState<Set<Leaf['id']>>(initialSelected ?? new Set());

  const handleChange = useCallback<ChangeHandler<Leaf>>(
    (ids) => {
      onChange(ids);

      setSelected(ids);
    },
    [onChange],
  );

  return (
    <UiCheckboxTree
      labelOf={labelOf}
      onChange={handleChange}
      selected={selected}
      testId={testId}
      tree={tree}
    />
  );
};
