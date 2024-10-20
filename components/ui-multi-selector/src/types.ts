import { ComponentType } from 'react';

// region Options & Values

export type Option =
  | string
  | {
      icon?: IconComponent;
      label?: string;

      value: string;
    };

export type Selected = Set<string>;

// endregion Options & Values

// region Handlers

export type ChangeHandler = (selected: Selected) => void;

export type AddHandler = (values: string[]) => void;

export type RemoveHandler = (value: string) => void;

export type ClearHandler = () => void;

// endregion Handlers

// region Look & Feel

export type IconComponent = ComponentType<{ className?: string }>;

export type SelectAll =
  | string
  | {
      icon?: IconComponent;

      label: string;
    };

export type SelectFound = SelectAll;

export type Size = 'small' | 'medium';

export type Variant = 'accent' | 'contrast';

// endregion Look & Feel
