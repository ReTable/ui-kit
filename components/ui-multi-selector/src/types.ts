import { ComponentType, ReactNode } from 'react';

// region Options & Values

export type Option =
  | string
  | {
      icon?: IconComponent;
      label?: string;

      value: string;
    };

export type Selected = Set<string>;

export type CompleteKey = 'Enter' | 'Tab';

// endregion Options & Values

// region Handlers

export type ChangeHandler = (selected: Selected) => void;

export type AddHandler = (values: string[]) => void;

export type RemoveHandler = (value: string) => void;

export type ClearHandler = () => void;

export type SearchHandler = (search: string) => void;

export type TagRenderer = (className: string, option: Option) => ReactNode;

// endregion Handlers

// region Controllers

export type DropdownController = {
  goToNext: () => void;
  goToPrevious: () => void;
  selectCurrent: () => void;
};

// endregion Controllers

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
