import { BranchComponentType } from '~';

import { Data } from './pipeline';

export const Branch: BranchComponentType<number, Data> = ({
  data,
  id,
  isExpanded,
  level,
  onToggle,
}) => (
  <div
    data-id={id}
    data-is-expanded={isExpanded}
    data-level={level}
    data-name={data.name}
    data-testid={`branch-${id}`}
  >
    <button data-testid={`branch-${id}-toggle`} onClick={onToggle} type="button" />
  </div>
);
