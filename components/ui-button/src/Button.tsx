import { FC } from 'react';

import { clsx } from 'clsx/lite';

import {
  hasIcon as hasIconModifier,
  icon,
  isDisabled as isDisabledModifier,
  isFrozen as isFrozenModifier,
} from './common.css';

import { titleOf } from './helpers';
import { InnerProps as Props } from './types';

export const Button: FC<Props> = ({
  children,
  className,
  iconClassName,
  isDisabled = false,
  isFrozen = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  role,
  tabIndex: providedTabIndex = 0,
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

  const [ariaDisabled, tabIndex] =
    isDisabled || isFrozen ? [true, -1] : [undefined, providedTabIndex];

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
      const { as, href, ...rest } = props;

      return (
        <a
          aria-disabled={ariaDisabled}
          className={finalClassName}
          href={href}
          role={role ?? 'link'}
          tabIndex={tabIndex}
          title={title}
          {...rest}
        >
          {content}
        </a>
      );
    }
    case 'div': {
      const { as, ...rest } = props;

      return (
        <div
          aria-disabled={ariaDisabled}
          className={finalClassName}
          role={role ?? 'button'}
          tabIndex={tabIndex}
          title={title}
          {...rest}
        >
          {content}
        </div>
      );
    }
    case 'link': {
      const { as, component: Link, to, ...rest } = props;

      return (
        <Link
          aria-disabled={ariaDisabled}
          className={finalClassName}
          role={role ?? 'link'}
          tabIndex={tabIndex}
          title={title}
          to={to}
          {...rest}
        >
          {content}
        </Link>
      );
    }
    default: {
      const { as, type = 'button', ...rest } = props;

      return (
        <button
          aria-disabled={ariaDisabled}
          className={finalClassName}
          disabled={isDisabled || isFrozen}
          role={role ?? 'button'}
          tabIndex={tabIndex}
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
