import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiAiChat.css';

export type Props = {
  className?: string;
};

export function UiAiChat({ className = '' }: Props): ReactNode {
  return <div className={clsx(styles.root, className)} />;
}

if (import.meta.env.DEV) {
  UiAiChat.displayName = 'ui-ai-chat(UiAiChat)';
}
