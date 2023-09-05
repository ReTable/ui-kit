import { MouseEventHandler } from 'react';

import { AddIcon } from './AddIcon';

// region Types

type BaseProps = {
  as?: string;
  variant: string;
};

export type ArgsOf<Props extends BaseProps> = {
  as?: Props['as'];
  href?: string;
  icon?: boolean;
  isDisabled?: boolean;
  isFrozen?: boolean;
  label?: string;
  onClick?: MouseEventHandler;
  variant?: Props['variant'];
};

// endregion

// region Meta

export const argTypes = {
  as: {
    name: 'As',
    control: 'select',
    options: ['button', 'a', 'div'],
  },
  icon: {
    name: 'Has icon?',
    type: 'boolean',
  },
  isDisabled: {
    name: 'Is disabled?',
    control: 'boolean',
  },
  isFrozen: {
    name: 'Is frozen?',
    control: 'boolean',
  },
  href: {
    name: 'URL',
    control: 'text',
    if: {
      arg: 'as',
      eq: 'a',
    },
  },
  label: {
    name: 'Label',
    control: 'text',
  },
  onClick: {
    action: 'onClick',
  },
  variant: {
    name: 'Variant',
    control: 'select',
    options: [] as string[],
  },
};

// endregion

// region Helpers

export function toProps<Props extends BaseProps>({
  as,
  href,
  icon,
  isDisabled,
  isFrozen,
  label: children,
  onClick,
  variant,
}: ArgsOf<Props>): Props {
  const props: Record<string, unknown> = {
    as,
    children,
    isDisabled,
    isFrozen,
    onClick,
    variant,
  };

  if (props.as === 'a') {
    props.href = href;
  }

  if (icon) {
    props.icon = AddIcon;
  }

  return props as Props;
}

// endregion
