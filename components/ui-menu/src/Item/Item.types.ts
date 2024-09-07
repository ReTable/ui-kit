import { MouseEventHandler, ReactNode } from 'react';

import { IconComponentType, Sizes, Variant } from '../Menu.types';

export type ClickHandler = MouseEventHandler<HTMLButtonElement>;

export type SelectHandler = (id: string) => void;

export type PublicProps = {
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

export type Props = PublicProps & {
  id: string;
  size: Sizes;
  view: Variant;
  onSelect?: SelectHandler;
};
