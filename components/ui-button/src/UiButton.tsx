import { FC } from 'react';

import clsx from 'clsx';

import { frozen, root } from './UiButton.css';
import { hasIcon as hasIconModifier, isDisabled as isDisabledModifier } from './modifiers.css';

import { InnerProps as Props } from './types';

export const UiButton: FC<Props> = ({
  children,
  className,
  hasIcon,
  isDisabled,
  isFrozen,
  variantClassName,
  ...props
}: Props) => {
  const finalClassName = clsx(
    root,
    hasIcon && hasIconModifier,
    isFrozen && frozen,
    isDisabled && isDisabledModifier,
    variantClassName,
    className,
  );

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

export { type InnerProps as Props } from './types';
