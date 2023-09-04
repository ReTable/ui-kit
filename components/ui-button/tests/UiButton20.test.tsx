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
    variant: 'contract',
  } as const;

  switch (props.as) {
    case 'a': {
      return <UiButton20 as="a" href={props.href} {...baseProps} />;
    }
    case 'div': {
      return <UiButton20 as="div" {...baseProps} />;
    }
    default: {
      return <UiButton20 as={props.as} type={props.type} {...baseProps} />;
    }
  }
};

describe('UiButton20', () => {
  suiteOf(Button);
});
