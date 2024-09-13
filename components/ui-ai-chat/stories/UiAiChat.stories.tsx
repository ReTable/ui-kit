import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { UiAiChat } from '~';

import { Chat } from './Chat';

// region Meta

const meta: Meta<typeof UiAiChat> = {
  title: 'UiAiChat',

  component: UiAiChat,
};

export default meta;

// endregion Meta

// region Playgrounds

export const Playground: StoryObj<typeof Chat> = {
  args: {
    context: false,
    inputAtTheBottom: false,
    mode: true,
    startNewChat: false,
    tableActions: [
      {
        label: 'Copy Table',
        action: action('copy-table'),
      },
    ],
  },
  argTypes: {
    context: {
      name: 'Allow to set context?',
      type: 'boolean',
    },
    inputAtTheBottom: {
      name: 'Input at the bottom?',
      type: 'boolean',
    },
    mode: {
      name: 'Allow to select mode?',
      type: 'boolean',
    },
    startNewChat: {
      name: 'Allow to start new chat?',
      type: 'boolean',
    },
  },

  render({ context, inputAtTheBottom, mode, startNewChat, tableActions }) {
    return (
      <Chat
        context={context}
        inputAtTheBottom={inputAtTheBottom}
        mode={mode}
        startNewChat={startNewChat}
        tableActions={tableActions}
      />
    );
  },
};

// endregion Playgrounds
