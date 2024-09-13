import { ReactNode } from 'react';

import { TableAction, UiAiChat } from '~';

import * as styles from './Chat.css';

import { Features } from './Chat.types';
import { useChat } from './hooks';

type Props = Features & {
  tableActions: TableAction[];
};

export function Chat({ tableActions, ...features }: Props): ReactNode {
  const chat = useChat(features);

  return (
    <div className={styles.root}>
      <UiAiChat {...chat} placeholder="Ask Universe" tableActions={tableActions} />
    </div>
  );
}
