import { ComponentType } from 'react';

import { UiTagSize, UiTagVariant } from '@tabula/ui-tag';

export type IconComponent = ComponentType<{ className?: string }>;

export type Option = {
  id: string;

  icon?: IconComponent;
  label: string;
};

export type Size = UiTagSize;

export type Variant = UiTagVariant;
