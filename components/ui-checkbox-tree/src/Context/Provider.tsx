import { PropsWithChildren, useMemo } from 'react';

import { Tree, TreeLeaf } from '@tabula/tree-utils';

import { Context } from './Context';
import { useHandlers, useItemStates } from './hooks';
import { ChangeHandler, ContextValue, LabelGetter, Selected } from './types';

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
}: Props<Leaf>) {
  const itemStates = useItemStates(tree, selected);
  const { onChangeLeaf, onChangeBranch } = useHandlers(tree, onChange);

  const value = useMemo(
    () => ({ itemStates, labelOf, onChangeLeaf, onChangeBranch }) as unknown as ContextValue,
    [itemStates],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
