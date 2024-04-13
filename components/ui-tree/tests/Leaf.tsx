import { LeafComponentType } from '~';

import { Data } from './pipeline';

export const Leaf: LeafComponentType<number, Data> = ({ data, id, level }) => (
  <div data-id={id} data-level={level} data-name={data.name} data-testid={`leaf-${id}`} />
);
