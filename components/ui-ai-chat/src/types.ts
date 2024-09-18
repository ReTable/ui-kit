import { ComponentType } from 'react';

import { variants } from './shared.css';

export type Request =
  | {
      id: number;

      prompt: string;
      answer: string;
    }
  | {
      id?: never;

      prompt: string;
      answer?: never;
    };

export type Controller = {
  scrollToTop: () => void;
  scrollToBottom: () => void;
};

export type Mode = {
  id: string;
  name: string;
};

export type TableData = {
  header: string[];
  rows: string[][];
};

export type TableAction = {
  label: string;
  action: (data: TableData) => void;
};

export type Variant = keyof typeof variants;

export type ToolbarItemIcon = ComponentType<{ className?: string }>;

export type ToolbarAction = {
  type: 'action';

  id: string;

  icon: ToolbarItemIcon;
  label: string;

  onAction: () => void;
};

export type ToolbarToggle = {
  type: 'toggle';

  id: string;

  icon: ToolbarItemIcon;
  label: string;

  onToggle: (value: boolean) => void;

  value: boolean;
};

export type ToolbarDivider = {
  type: 'divider';

  id: string;
};

export type ToolbarItem = ToolbarAction | ToolbarToggle | ToolbarDivider;
