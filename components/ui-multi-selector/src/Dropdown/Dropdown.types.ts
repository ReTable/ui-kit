import { ReactNode } from 'react';

import { IconComponent } from '../types';

export type Part = {
  isMatches: boolean;
  substring: string;
};

export type Item =
  | {
      type: 'item';

      id: string;

      icon?: IconComponent;
      label: ReactNode;

      onClick: () => void;
    }
  | { type: 'divider' };
