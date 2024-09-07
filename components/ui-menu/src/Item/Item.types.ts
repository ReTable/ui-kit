import { MouseEventHandler, ReactNode } from 'react';

import { IconComponentType } from '../types';

export type ClickHandler = MouseEventHandler<HTMLButtonElement>;

export type SelectItemHandler = (id: string) => void;

export type ItemProps = {
  className?: string;
  contentClassName?: string;

  title?: ReactNode;
  content: ReactNode;
  htmlTitle?: string;
  disabled?: boolean;

  leftIcon?: IconComponentType;
  skipLeftIcon?: boolean;

  rightIcon?: IconComponentType;
  skipRightIcon?: boolean;

  onClick?: ClickHandler;
  onMouseDown?: ClickHandler;
  stopPropagation?: boolean;
  preventDefault?: boolean;

  trackId?: string;
  trackData?: string;
};
