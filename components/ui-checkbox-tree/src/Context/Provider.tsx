import { PropsWithChildren, ReactNode, useMemo } from 'react';

import { Tree, TreeLeaf } from '@tabula/ui-tree';

import { ChangeHandler, Selected } from '../types';

import { Context } from './Context';
import { useCheckboxesStates, useHandlers } from './hooks';
import { ContextValue, LabelGetter } from './types';

type Props<Leaf extends TreeLeaf> = PropsWithChildren<{
  tree: Tree<Leaf>;

  selected: Selected<Leaf>;

  onChange?: ChangeHandler<Leaf>;

  labelOf: LabelGetter<Leaf>;
}>;

export function Provider<Leaf extends TreeLeaf>({
  children,
  labelOf,
  onChange,
  selected,
  tree,
}: Props<Leaf>): ReactNode {
  const [headerState, itemStates] = useCheckboxesStates(tree, selected);
  const { onChangeAll, onChangeLeaf, onChangeBranch } = useHandlers({
    itemStates,
    onChange,
    selected,
    tree,
  });

  const value = useMemo(
    () =>
      ({
        headerState,
        itemStates,
        labelOf,
        onChangeAll,
        onChangeLeaf,
        onChangeBranch,
      }) as unknown as ContextValue,
    [headerState, itemStates, labelOf, onChangeAll, onChangeLeaf, onChangeBranch],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
