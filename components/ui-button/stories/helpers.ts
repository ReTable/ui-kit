import { MouseEventHandler } from 'react';

import { AddIcon } from './AddIcon';
import { Link } from './Link';

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
  to?: string;
  variant?: Props['variant'];
};

// endregion

// region Meta

export const argTypes = {
  as: {
    name: 'As',
    control: 'select',
    options: ['button', 'a', 'div', 'link'],
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
  to: {
    name: 'URL',
    control: 'text',
    if: {
      arg: 'as',
      eq: 'link',
    },
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
  to,
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

  if (props.as === 'link') {
    props.component = Link;
    props.to = to;
  }

  if (icon) {
    props.icon = AddIcon;
  }

  return props as Props;
}

// endregion
