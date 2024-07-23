import { FC, useCallback, useState } from 'react';

import { ChangeHandler, LabelGetter, Match, UiCheckboxTree } from '~';

import { Leaf, Tree } from './types';

type Props = {
  tree: Tree;

  selected?: Set<Leaf['id']>;

  labelOf: LabelGetter<Leaf>;

  onChange: ChangeHandler<Leaf>;

  pattern?: string;

  match?: Match<Leaf>;

  testId: string;
};

export const CheckboxTree: FC<Props> = ({
  labelOf,
  match,
  onChange,
  pattern,
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
      match={match}
      onChange={handleChange}
      pattern={pattern}
      selected={selected}
      testId={testId}
      tree={tree}
    />
  );
};
