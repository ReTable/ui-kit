import { FC } from 'react';

import { clsx } from 'clsx';

import { root } from './UiAction.css';

type Props = {
  className?: string;
  children: string;
};

export const UiAction: FC<Props> = ({ className, children }) => {
  return (
    <button className={clsx(root, className)} type="button">
      {children}
    </button>
  );
};
