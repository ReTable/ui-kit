import { FC } from 'react';

import { toggleButton } from './style.css';

import { useOptions } from './UiOptions';

type Props = {
  isCollapsed: boolean;
  path: string;
};

export const UiToggle: FC<Props> = ({ isCollapsed, path }) => {
  const { isInteractive, toggle } = useOptions();

  if (!isInteractive) {
    return null;
  }

  const handleClick = () => {
    toggle(path);
  };

  return (
    <button className={toggleButton} onClick={handleClick} type="button">
      {isCollapsed ? '+' : '-'}
    </button>
  );
};

UiToggle.displayName = 'UiJsonView(UiToggle)';
