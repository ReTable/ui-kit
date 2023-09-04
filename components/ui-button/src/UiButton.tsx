import { FC } from 'react';

import clsx from 'clsx';

import {
  hasIcon as hasIconModifier,
  isDisabled as isDisabledModifier,
  isFrozen as isFrozenModifier,
} from './modifiers.css';

import { InnerProps as Props } from './types';

export const UiButton: FC<Props> = ({
  children,
  className,
  hasIcon,
  isDisabled = false,
  isFrozen = false,
  role = 'button',
  tabIndex = 0,
  title,
  variantClassName,
  ...props
}: Props) => {
  const finalClassName = clsx(
    variantClassName,
    isFrozen && isFrozenModifier,
    isDisabled && isDisabledModifier,
    hasIcon && hasIconModifier,
    className,
  );

  const [controlledAriaDisabled, controlledTabIndex] =
    isDisabled || isFrozen ? [true, undefined] : [undefined, tabIndex];

  switch (props.as) {
    case 'a': {
      const { href, ...rest } = props;

      return (
        <a
          aria-disabled={controlledAriaDisabled}
          className={finalClassName}
          href={isDisabled || isFrozen ? undefined : href}
          role={role}
          tabIndex={controlledTabIndex}
          title={title}
          {...rest}
        >
          {children}
        </a>
      );
    }
    case 'div': {
      const { ...rest } = props;

      return (
        <div
          aria-disabled={controlledAriaDisabled}
          className={finalClassName}
          role={role}
          tabIndex={controlledTabIndex}
          title={title}
          {...rest}
        >
          {children}
        </div>
      );
    }
    default: {
      const { type = 'button', ...rest } = props;

      return (
        <button
          aria-disabled={controlledAriaDisabled}
          className={finalClassName}
          disabled={isDisabled || isFrozen}
          role={role}
          tabIndex={controlledTabIndex}
          title={title}
          // eslint-disable-next-line react/button-has-type
          type={type}
          {...rest}
        >
          {children}
        </button>
      );
    }
  }
};
