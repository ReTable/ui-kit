import { ComponentType, HTMLProps, memo } from 'react';

import clsx from 'clsx';

import { disabled } from './style.css';

type Props = HTMLProps<SVGSVGElement> & {
  isDisabled?: boolean;
};

export function createIcon(
  Icon: ComponentType<Props>,
  iconClassName: string,
  displayName: string,
): ComponentType<Props> {
  const StyledIcon = memo<Props>(({ className, isDisabled, testId, ...props }) => {
    return <Icon className={clsx(iconClassName, isDisabled && disabled, className)} {...props} />;
  });

  StyledIcon.displayName = displayName;

  return StyledIcon;
}
