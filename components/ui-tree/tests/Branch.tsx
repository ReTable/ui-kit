import { BranchComponentType } from '~';

import { Leaf } from './helpers';

export const Branch: BranchComponentType<Leaf> = ({ isExpanded, level, node, onToggle }) => (
  <div
    data-id={node.id}
    data-is-expanded={isExpanded}
    data-level={level}
    data-name={node.name}
    data-testid={`branch-${node.id}`}
  >
    <button data-testid={`branch-${node.id}-toggle`} onClick={onToggle} type="button" />
  </div>
);
