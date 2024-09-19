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
  focus: () => void;
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
