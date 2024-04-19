import { BranchComponentType } from '~';

import { Leaf } from './helpers';

export const Branch: BranchComponentType<Leaf> = ({
  isExpanded,
  level,
  node,
  onToggle,
  testId,
}) => (
  <div
    data-id={node.id}
    data-is-expanded={isExpanded}
    data-level={level}
    data-name={node.name}
    data-testid={testId}
  >
    <button data-testid={`${testId}--toggle`} onClick={onToggle} type="button" />
  </div>
);
