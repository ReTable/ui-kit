import { ComponentType, FC, HTMLProps } from 'react';

import clsx from 'clsx';

import { disabled } from './style.css';

type Props = HTMLProps<SVGSVGElement> & {
  isDisabled?: boolean;
  testId?: string;
};

export function createIcon(
  Icon: ComponentType<Props>,
  iconClassName: string,
): ComponentType<Props> {
  const StyledIcon: FC<Props> = ({ className, isDisabled, testId, ...props }) => (
    <Icon
      className={clsx(iconClassName, isDisabled && disabled, className)}
      data-testid={testId}
      {...props}
    />
  );

  if (import.meta.env.DEV) {
    StyledIcon.displayName = `ui-node-icon(Ui${Icon.displayName})`;
  }

  return StyledIcon;
}
