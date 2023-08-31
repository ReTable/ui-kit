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
  testId,
  trackId,
  variantClassName,
  ...props
}: Props) => {
  const finalClassName = clsx(
    variantClassName,
    isDisabled && !isFrozen && isDisabledModifier,
    isFrozen && isFrozenModifier,
    hasIcon && hasIconModifier,
    variantClassName,
    className,
  );

  const tabIndex = isDisabled || isFrozen ? -1 : 0;

  switch (props.type) {
    case 'link': {
      return (
        <a
          aria-disabled={isDisabled || isFrozen}
          className={finalClassName}
          data-testid={testId}
          data-track-id={trackId}
          href={props.href}
          onClick={props.onClick}
          tabIndex={tabIndex}
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
          aria-disabled={isDisabled || isFrozen}
          className={finalClassName}
          data-testid={testId}
          data-track-id={trackId}
          onClick={props.onClick}
          role="button"
          tabIndex={tabIndex}
        >
          {children}
        </div>
      );
    }
    default: {
      return (
        <button
          className={finalClassName}
          data-testid={testId}
          data-track-id={trackId}
          disabled={isDisabled || isFrozen}
          onClick={props.onClick}
          tabIndex={tabIndex}
          type="button"
        >
          {children}
        </button>
      );
    }
  }
};
