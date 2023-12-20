import { FC } from 'react';

import { clsx } from 'clsx';

import { root } from './Action.css';

import { useOptions } from '../OptionsProvider';
import { ActionFn } from '../types';

type Props = {
  action: ActionFn;
  children: string;
  className?: string;
  jsonPath: string;
};

export const Action: FC<Props> = ({ action, className, children, jsonPath }) => {
  const { onAction } = useOptions();

  const handleClick = () => {
    onAction(jsonPath, action);
  };

  return (
    <button className={clsx(root, className)} onClick={handleClick} type="button">
      {children}
    </button>
  );
};
