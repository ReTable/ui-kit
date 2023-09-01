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
  title,
  trackId,
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

  const tabIndex = isDisabled || isFrozen ? undefined : 0;

  switch (props.type) {
    case 'link': {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          aria-disabled={isDisabled || isFrozen ? true : undefined}
          className={finalClassName}
          data-testid={testId}
          data-track-id={trackId}
          href={isDisabled || isFrozen ? undefined : props.href}
          onClick={props.onClick}
          rel={props.rel}
          tabIndex={tabIndex}
          target={props.target}
          title={title}
        >
          {children}
        </a>
      );
    }
    case 'visual': {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          aria-disabled={isDisabled || isFrozen ? true : undefined}
          className={finalClassName}
          data-testid={testId}
          data-track-id={trackId}
          onClick={props.onClick}
          role="button"
          tabIndex={tabIndex}
          title={title}
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
          title={title}
          type="button"
        >
          {children}
        </button>
      );
    }
  }
};
