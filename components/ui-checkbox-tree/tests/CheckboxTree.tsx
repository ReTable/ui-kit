import { FC, useState } from 'react';

import { LabelGetter, UiCheckboxTree } from '~';

import { Leaf, Tree } from './types';

type Props = {
  tree: Tree;

  labelOf: LabelGetter<Leaf>;

  testId: string;
};

export const CheckboxTree: FC<Props> = ({ labelOf, testId, tree }) => {
  const [selected, setSelected] = useState<Set<Leaf['id']>>(new Set());

  return (
    <UiCheckboxTree
      labelOf={labelOf}
      onChange={setSelected}
      selected={selected}
      testId={testId}
      tree={tree}
    />
  );
};
