import { FC, useState } from 'react';

import { root } from './UiStringValue.css';

import { useOptions } from './UiOptions';

type Props = {
  children: string;
};

export const UiStringValue: FC<Props> = ({ children }) => {
  const { shortStringAfterLength } = useOptions();

  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (shortStringAfterLength == null) {
      return false;
    }

    return children.length > shortStringAfterLength;
  });

  if (shortStringAfterLength == null) {
    return children;
  }

  const handleClick = () => {
    setIsCollapsed((value) => !value);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <span className={root} onClick={handleClick} role="button" tabIndex={-1}>
      {isCollapsed ? `${children.slice(0, shortStringAfterLength)}...` : children}
    </span>
  );
};
