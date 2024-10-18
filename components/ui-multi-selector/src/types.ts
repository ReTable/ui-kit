import { ComponentType } from 'react';

export type IconComponent = ComponentType<{ className?: string }>;

export type Option = {
  id: string;

  icon?: IconComponent;
  label: string;
};

export type Size = 'small' | 'medium';

export type Variant = 'accent' | 'contrast';

export type SelectAll =
  | string
  | {
      icon?: IconComponent;

      label: string;
    };
