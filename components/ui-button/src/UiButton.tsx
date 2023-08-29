import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { frozen, root } from './UiButton.css';

export type Props = PropsWithChildren<{
  className?: string;
  isDisabled?: boolean;
  isFrozen?: boolean;
  onClick?: MouseEventHandler;
}>;

export const UiButton: FC<Props> = ({ children, className, isDisabled, isFrozen, onClick }) => (
  <button
    className={clsx(root, isFrozen && frozen, className)}
    disabled={isDisabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
