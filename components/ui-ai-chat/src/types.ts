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

export type InternalConversationController = {
  hasTextArea: boolean;

  scrollToTop: (behavior?: ScrollBehavior) => void;
  scrollToBottom: (behavior?: ScrollBehavior) => void;
};

export type ConversationController = Omit<InternalConversationController, 'hasTextArea'>;

export type PromptInputController = {
  focus: () => void;
  blur: () => void;
  select: () => void;
};

export type InternalController = {
  conversation: InternalConversationController;
  prompt: PromptInputController;
};

export type Controller = {
  conversation: ConversationController;
  prompt: PromptInputController;
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
