import { LeafComponentType } from '~';

import { Leaf as LeafType } from './helpers';

export const Leaf: LeafComponentType<LeafType> = ({ level, node, testId }) => (
  <div data-id={node.id} data-level={level} data-name={node.name} data-testid={testId} />
);
