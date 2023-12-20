import { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';

import clsx from 'clsx';

import { root } from './UiItem.css';

import { UiButton } from '../UiButton';

export type Props = PropsWithChildren<{
  className?: string;

  isSelected: boolean;

  onClick: MouseEventHandler<HTMLButtonElement>;

  value: number | string;
}>;

export const UiItem = forwardRef<HTMLButtonElement, Props>(function UiItem(
  { children, className, isSelected, onClick, value },
  ref,
) {
  return (
    <UiButton
      className={clsx(isSelected ? root.selected : root.default, className)}
      data-value={value}
      disabled={isSelected}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </UiButton>
  );
});
