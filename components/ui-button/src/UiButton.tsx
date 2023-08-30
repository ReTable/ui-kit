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
  isDisabled,
  isFrozen,
  trackId,
  variantClassName,
  ...props
}: Props) => {
  const finalClassName = clsx(
    hasIcon && hasIconModifier,
    isFrozen && isFrozenModifier,
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
          data-track-id={trackId}
          href={props.href}
          onClick={props.onClick}
          tabIndex={isDisabled ? -1 : 0}
          target={props.target}
        >
          {children}
        </a>
      );
    }
    case 'visual': {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          aria-disabled={isDisabled}
          className={finalClassName}
          data-track-id={trackId}
          onClick={props.onClick}
          role="button"
          tabIndex={isDisabled ? -1 : 0}
        >
          {children}
        </div>
      );
    }
    default: {
      return (
        <button
          className={finalClassName}
          data-track-id={trackId}
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
