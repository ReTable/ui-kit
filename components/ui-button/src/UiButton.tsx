import { FC } from 'react';

import clsx from 'clsx';

import {
  hasIcon as hasIconModifier,
  icon,
  isDisabled as isDisabledModifier,
  isFrozen as isFrozenModifier,
} from './common.css';

import { titleOf } from './helpers';
import { InnerProps as Props } from './types';

export const UiButton: FC<Props> = ({
  children,
  className,
  iconClassName,
  isDisabled = false,
  isFrozen = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  role = 'button',
  tabIndex = 0,
  title: providedTitle,
  variantClassName,
  ...props
}: Props) => {
  const finalClassName = clsx(
    variantClassName,
    isFrozen && isFrozenModifier,
    isDisabled && isDisabledModifier,
    (LeftIcon != null || RightIcon != null) && hasIconModifier,
    className,
  );

  const [controlledAriaDisabled, controlledTabIndex] =
    isDisabled || isFrozen ? [true, undefined] : [undefined, tabIndex];

  const content = (
    <>
      {LeftIcon != null && <LeftIcon className={clsx(icon, iconClassName)} />}
      {children}
      {RightIcon != null && <RightIcon className={clsx(icon, iconClassName)} />}
    </>
  );

  const title = titleOf(providedTitle, children);

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
          {content}
        </a>
      );
    }
    case 'div': {
      return (
        <div
          aria-disabled={controlledAriaDisabled}
          className={finalClassName}
          role={role}
          tabIndex={controlledTabIndex}
          title={title}
          {...props}
        >
          {content}
        </div>
      );
    }
    case 'link': {
      const { component: Link, to, ...rest } = props;

      return (
        <Link
          aria-disabled={controlledAriaDisabled}
          className={finalClassName}
          role={role}
          tabIndex={controlledTabIndex}
          title={title}
          to={isDisabled || isFrozen ? '' : to}
          {...rest}
        >
          {content}
        </Link>
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
          {content}
        </button>
      );
    }
  }
};
