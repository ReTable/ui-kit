import { FC } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as CollapseIcon } from './assets/collapse.svg';
import { ReactComponent as ExpandIcon } from './assets/expand.svg';

import { root } from './Toggle.css';

import { useOptions } from '../OptionsProvider';

type Props = {
  className?: string;
  isCollapsed?: boolean;
  path: string;
};

export const Toggle: FC<Props> = ({ className, isCollapsed, path }) => {
  const { isInteractive, onToggle } = useOptions();

  if (!isInteractive) {
    return null;
  }

  const handleClick = () => {
    onToggle(path);
  };

  return (
    <button className={clsx(root, className)} onClick={handleClick} type="button">
      {isCollapsed ? <ExpandIcon /> : <CollapseIcon />}
    </button>
  );
};
