import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { root } from './UiButton.css';

export type Props = PropsWithChildren<{
  className?: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
}>;

export const UiButton: FC<Props> = ({ children, className, isDisabled, onClick }) => (
  <button className={clsx(root, className)} disabled={isDisabled} onClick={onClick} type="button">
    {children}
  </button>
);
