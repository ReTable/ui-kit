import { IconComponent } from '../types';

export type Item = {
  id: string;

  icon?: IconComponent;
  label: string;

  onClick: () => void;
};
