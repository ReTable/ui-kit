import { MouseEventHandler } from 'react';

import { AddIcon } from './AddIcon';

// region Types

type BaseProps = {
  type?: string;
  variant: string;
};

export type ArgsOf<Props extends BaseProps> = {
  type?: Props['type'];
  href?: string;
  icon?: boolean;
  isDisabled?: boolean;
  isFrozen?: boolean;
  label?: string;
  onClick?: MouseEventHandler;
  target?: string;
  trackId?: string;
  variant?: Props['variant'];
};

// endregion

// region Meta

export const argTypes = {
  type: {
    name: 'Type',
    control: 'select',
    options: ['button', 'link', 'visual'],
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
      eq: 'link',
    },
  },
  label: {
    name: 'Label',
    control: 'text',
  },
  onClick: {
    action: 'onClick',
  },
  target: {
    name: 'Target',
    control: 'text',
    if: {
      arg: 'as',
      eq: 'link',
    },
  },
  trackId: {
    name: 'Track ID',
    control: 'text',
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
  href,
  icon,
  isDisabled,
  isFrozen,
  label: children,
  onClick,
  target,
  trackId,
  type,
  variant,
}: ArgsOf<Props>): Props {
  const props: Record<string, unknown> = {
    children,
    isDisabled,
    isFrozen,
    onClick,
    trackId,
    type,
    variant,
  };

  if (props.as === 'link') {
    props.href = href;
    props.target = target;
  }

  if (icon) {
    props.icon = AddIcon;
  }

  return props as Props;
}

// endregion
