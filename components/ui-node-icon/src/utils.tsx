import { ComponentType, HTMLProps, memo } from 'react';

import { disabled } from './style.css';

type Props = HTMLProps<SVGSVGElement> & {
  isDisabled?: boolean;
};

export function createIcon(
  Icon: ComponentType<Props>,
  iconClassName: string,
  displayName: string,
): ComponentType<Props> {
  const StyledIcon = memo<Props>(({ className: userClassName, isDisabled, ...props }) => {
    const className = [iconClassName, isDisabled && disabled, userClassName]
      .filter(Boolean)
      .join(' ');

    return (
      // NOTE: We provide all other properties as is.
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Icon className={className} {...props} />
    );
  });

  StyledIcon.displayName = displayName;

  return StyledIcon;
}
