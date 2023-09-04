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

  const controlledTabIndex = isDisabled || isFrozen ? undefined : tabIndex;

  switch (props.as) {
    case 'a': {
      const { href, ...rest } = props;

      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          aria-disabled={isDisabled || isFrozen ? true : undefined}
          className={finalClassName}
          href={isDisabled || isFrozen ? undefined : href}
          tabIndex={controlledTabIndex}
          title={title}
          {...rest}
        >
          {children}
        </a>
      );
    }
    case 'div': {
      const { role = 'button', ...rest } = props;

      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          aria-disabled={isDisabled || isFrozen ? true : undefined}
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
          className={finalClassName}
          disabled={isDisabled || isFrozen}
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
