import { FC } from 'react';

import { describe } from 'vitest';

import { UiButton32 } from '~';

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
    <UiButton32
      as={props.as}
      className={className}
      data-testid={testId}
      href={props.as === 'a' ? props.href : undefined}
      icon={icon}
      isDisabled={isDisabled}
      isFrozen={isFrozen}
      tabIndex={tabIndex}
      title={title}
      variant="primaryDesign"
    >
      {children}
    </UiButton32>
  );
};

describe('UiButton32', () => {
  suiteOf(Button);
});
