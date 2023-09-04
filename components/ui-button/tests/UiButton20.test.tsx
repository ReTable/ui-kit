import { FC } from 'react';

import { describe } from 'vitest';

import { UiButton20 } from '~';

import { ButtonProps, suiteOf } from './helpers';

const Button: FC<ButtonProps> = ({
  children,
  className,
  icon,
  isDisabled,
  isFrozen,
  tabIndex,
  testId = 'subject',
  title,
  ...props
}) => {
  return (
    <UiButton20
      as={props.as}
      className={className}
      data-testid={testId}
      href={props.as === 'a' ? props.href : undefined}
      icon={icon}
      isDisabled={isDisabled}
      isFrozen={isFrozen}
      tabIndex={tabIndex}
      title={title}
      variant="contract"
    >
      {children}
    </UiButton20>
  );
};

describe('UiButton20', () => {
  suiteOf(Button);
});
