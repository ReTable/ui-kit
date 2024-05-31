import { ComponentType } from 'react';

export type IconsMap = Record<string, ComponentType>;

export type IconSize = 'small' | 'medium' | 'large';

export type IconMap = Partial<Record<IconSize, ComponentType>>;
