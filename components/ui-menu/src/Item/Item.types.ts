import { ButtonHTMLAttributes, ReactNode } from 'react';

import { IconComponentType } from '../types';

export type SelectItemHandler = (id: string) => void;

type RestrictedProps = 'id' | 'onSelect' | 'title';

export type ItemProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, RestrictedProps> & {
  contentClassName?: string;

  title?: ReactNode;
  content: ReactNode;
  htmlTitle?: string;

  leftIcon?: IconComponentType;
  skipLeftIcon?: boolean;

  rightIcon?: IconComponentType;
  skipRightIcon?: boolean;

  stopPropagation?: boolean;
  preventDefault?: boolean;

  trackId?: string;
  trackData?: string;
};
