import { FC } from 'react';

import { describe } from 'vitest';

import { UiButton40 } from '~';

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
    <UiButton40
      as={props.as}
      className={className}
      data-testid={testId}
      href={props.as === 'a' ? props.href : undefined}
      icon={icon}
      isDisabled={isDisabled}
      isFrozen={isFrozen}
      tabIndex={tabIndex}
      title={title}
      variant="primary"
    >
      {children}
    </UiButton40>
  );
};

describe('UiButton40', () => {
  suiteOf(Button);
});
