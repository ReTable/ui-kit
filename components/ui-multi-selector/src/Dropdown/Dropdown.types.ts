import { ReactNode } from 'react';

import { IconComponent } from '../types';

export type Part = {
  isMatches: boolean;
  substring: string;
};

export type Item =
  | {
      type: 'item';

      key: string;

      icon?: IconComponent;
      label: ReactNode;

      onClick: () => void;
    }
  | {
      type: 'divider';

      key: string;
    };
