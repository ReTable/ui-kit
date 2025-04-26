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

export type AddChangeType = 'add' | 'add-all' | 'add-found' | 'add-custom';

export type RemoveChangeType = 'remove' | 'remove-all';

export type ChangeType = AddChangeType | RemoveChangeType;

export type ChangeHandler = (selected: Selected, type: ChangeType, difference: Selected) => void;

export type UpdateHandler = (type: ChangeType, values: string[]) => void;

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

export type BatchAction =
  | string
  | {
      icon?: IconComponent;

      label: string;
    };

export type Size = 'small' | 'medium';

export type Variant = 'accent' | 'contrast';

// endregion Look & Feel
