import { FC } from 'react';

import { describe } from 'vitest';

import { UiButton20 } from '~';

import { Link } from './Link';
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
    case 'link': {
      const { preventScrollReset, relative, reloadDocument, replace, state, to = '' } = props;

      return (
        <UiButton20
          as="link"
          component={Link}
          preventScrollReset={preventScrollReset}
          relative={relative}
          reloadDocument={reloadDocument}
          replace={replace}
          state={state}
          to={to}
          {...baseProps}
        />
      );
    }
    default: {
      return <UiButton20 as={props.as} type={props.type} {...baseProps} />;
    }
  }
};

describe('UiButton20', () => {
  suiteOf(Button);
});
