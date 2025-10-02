import { ReactNode } from 'react';

import { IconComponent } from '../types';

export type Part = {
  isMatches: boolean;
  substring: string;
};

export type Item =
  | {
      key: string;

      icon?: IconComponent;
      label: ReactNode;
      title?: string;

      onSelect: () => void;

      hasDividerAfter?: boolean;
    }
  | {
      key: string;
      skeleton: true;
    };
