import { FC } from 'react';

import { root } from './UiStringValue.css';

import { useOptions } from './UiOptions';
import { useStringCollapse } from './hooks';

type Props = {
  children: string;
};

export const UiStringValue: FC<Props> = ({ children }) => {
  const { shortStringAfterLength } = useOptions();

  const [isCollapsible, isCollapsed, onToggle] = useStringCollapse(
    children,
    shortStringAfterLength,
  );

  if (!isCollapsible) {
    return children;
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <span className={root} onClick={onToggle} role="button" tabIndex={-1}>
      {isCollapsed ? `${children.slice(0, shortStringAfterLength)}...` : children}
    </span>
  );
};
