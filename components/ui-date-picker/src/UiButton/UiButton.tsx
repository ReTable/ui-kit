import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { root } from './UiButton.css';

export type Props = PropsWithChildren<{
  className?: string;

  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export const UiButton: FC<Props> = ({ children, className, onClick }) => (
  <button className={clsx(root, className)} onClick={onClick} type="button">
    {children}
  </button>
);
