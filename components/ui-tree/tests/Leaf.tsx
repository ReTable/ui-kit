import { LeafComponentType } from '~';

import { Leaf as LeafType } from './helpers';

export const Leaf: LeafComponentType<LeafType> = ({ level, node }) => (
  <div data-id={node.id} data-level={level} data-name={node.name} data-testid={`leaf-${node.id}`} />
);
