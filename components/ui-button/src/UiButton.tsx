import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { disabled, frozen, root } from './UiButton.css';

type CommonProps = PropsWithChildren<{
  className?: string;
  isDisabled?: boolean;
  isFrozen?: boolean;
}>;

type ButtonProps = CommonProps & {
  as?: 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type LinkProps = CommonProps & {
  as: 'link';
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string;
};

export type Props = ButtonProps | LinkProps;

export const UiButton: FC<Props> = ({
  children,
  className,
  isDisabled,
  isFrozen,
  ...props
}: Props) => {
  const finalClassName = clsx(root, isFrozen && frozen, isDisabled && disabled, className);

  switch (props.as) {
    case 'link': {
      return (
        <a
          aria-disabled={isDisabled}
          className={finalClassName}
          href={props.href}
          onClick={props.onClick}
          tabIndex={isDisabled ? -1 : undefined}
          target={props.target}
        >
          {children}
        </a>
      );
    }
    default: {
      return (
        <button
          className={finalClassName}
          disabled={isDisabled}
          onClick={props.onClick}
          type="button"
        >
          {children}
        </button>
      );
    }
  }
};
