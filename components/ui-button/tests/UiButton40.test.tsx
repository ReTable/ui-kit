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
  role,
  tabIndex,
  testId = 'subject',
  title,
  ...props
}) => {
  const baseProps = {
    children,
    className,
    'data-testid': testId,
    icon,
    isDisabled,
    isFrozen,
    role,
    tabIndex,
    title,
    variant: 'primary',
  } as const;

  switch (props.as) {
    case 'a': {
      return <UiButton40 as="a" href={props.href} {...baseProps} />;
    }
    case 'div': {
      return <UiButton40 as="div" {...baseProps} />;
    }
    default: {
      return <UiButton40 as={props.as} type={props.type} {...baseProps} />;
    }
  }
};

describe('UiButton40', () => {
  suiteOf(Button);
});
