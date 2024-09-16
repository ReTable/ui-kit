import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { UiAiChat } from '~';

import { Chat } from './Chat';
import { Container } from './Container';
import { DEFAULT_MODE, MAX_PROMPT_LENGTH, MAX_TEMPERATURE, MIN_TEMPERATURE, MODES } from './const';

// region Meta

const meta: Meta<typeof UiAiChat> = {
  title: 'UiAiChat',

  component: UiAiChat,

  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof UiAiChat>;

const DEFAULT_ARGS = {
  conversation: [],

  minTemperature: MIN_TEMPERATURE,
  maxTemperature: MAX_TEMPERATURE,

  maxPromptLength: MAX_PROMPT_LENGTH,

  temperature: 0.5,

  placeholder: 'Ask AI',
};

const staticParameters = {
  controls: {
    exclude: /.*/g,
    hideNoControlsWarning: true,
  },
};

// endregion Story Utilities

// region Stories

export const Empty: Story = {
  args: DEFAULT_ARGS,

  parameters: staticParameters,
};

export const Pending: Story = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        prompt: 'Please, help me with my task.',
      },
    ],

    isPending: true,
  },

  parameters: staticParameters,
};

export const Answered: Story = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        id: 1,
        prompt: 'Please, help me with my task.',
        answer: [
          'OK, follow my recommendations:',
          '- keep work/life balance;',
          '- do things which helps to solve business task;',
          '- ...',
        ].join('\n'),
      },
    ],
  },

  parameters: staticParameters,
};

export const TableAnswered: Story = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        id: 1,
        prompt: 'Please, give me a table of months.',
        answer: [
          '| Month     | Days     |',
          '| --------- | -------- |',
          '| January   | 31       |',
          '| February  | 28 or 29 |',
          '| March     | 31       |',
          '| April     | 30       |',
          '| May       | 31       |',
          '| June      | 30       |',
          '| July      | 31       |',
          '| August    | 31       |',
          '| September | 30       |',
          '| October   | 31       |',
          '| November  | 30       |',
          '| December  | 31       |',
        ].join('\n'),
      },
    ],

    tableActions: [
      {
        label: 'Copy table',
        action: action('copy-table'),
      },
    ],
  },
};

export const Resend: Story = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        prompt: 'Please, help me with my task.',
      },
      {
        id: 2,
        prompt: 'Please, give me a table of months.',
        answer: [
          '| Month     | Days     |',
          '| --------- | -------- |',
          '| January   | 31       |',
          '| February  | 28 or 29 |',
          '| March     | 31       |',
          '| April     | 30       |',
          '| May       | 31       |',
          '| June      | 30       |',
          '| July      | 31       |',
          '| August    | 31       |',
          '| September | 30       |',
          '| October   | 31       |',
          '| November  | 30       |',
          '| December  | 31       |',
        ].join('\n'),
      },
    ],

    tableActions: [
      {
        label: 'Copy table',
        action: action('copy-table'),
      },
    ],
  },
};

export const Long: Story = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        id: 1,
        prompt: 'Please, help me with my task.',
        answer: [
          'OK, follow my recommendations:',
          '- keep work/life balance;',
          '- do things which helps to solve business task;',
          '- ...',
        ].join('\n'),
      },
      {
        id: 2,
        prompt: 'Please, give me a table of months.',
        answer: [
          '| Month     | Days     |',
          '| --------- | -------- |',
          '| January   | 31       |',
          '| February  | 28 or 29 |',
          '| March     | 31       |',
          '| April     | 30       |',
          '| May       | 31       |',
          '| June      | 30       |',
          '| July      | 31       |',
          '| August    | 31       |',
          '| September | 30       |',
          '| October   | 31       |',
          '| November  | 30       |',
          '| December  | 31       |',
        ].join('\n'),
      },
      {
        id: 3,
        prompt: 'Please, give me a table of week days.',
        answer: [
          '| Weekdays  |',
          '| --------- |',
          '| Monday    |',
          '| Tuesday   |',
          '| Wednesday |',
          '| Thursday  |',
          '| Friday    |',
          '| Saturday  |',
          '| Sunday    |',
        ].join('\n'),
      },
    ],

    tableActions: [
      {
        label: 'Copy table',
        action: action('copy-table'),
      },
    ],
  },
};

export const WithMode = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        id: 1,
        prompt: 'Please, help me with my task.',
        answer: [
          'OK, follow my recommendations:',
          '- keep work/life balance;',
          '- do things which helps to solve business task;',
          '- ...',
        ].join('\n'),
      },
    ],

    mode: DEFAULT_MODE,
    supportedModes: MODES,
  },

  parameters: staticParameters,
};

export const WithContext = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        id: 1,
        prompt: 'Please, help me with my task.',
        answer: [
          'OK, follow my recommendations:',
          '- keep work/life balance;',
          '- do things which helps to solve business task;',
          '- ...',
        ].join('\n'),
      },
    ],

    context: 'I working with data.',
  },

  parameters: staticParameters,
};

export const WithNewChat = {
  args: {
    ...DEFAULT_ARGS,

    conversation: [
      {
        id: 1,
        prompt: 'Please, help me with my task.',
        answer: [
          'OK, follow my recommendations:',
          '- keep work/life balance;',
          '- do things which helps to solve business task;',
          '- ...',
        ].join('\n'),
      },
    ],

    onStartNewChat: action('start-new-chat'),
  },

  parameters: staticParameters,
};

// endregion Stories

// region Playgrounds

export const Playground: StoryObj<typeof Chat> = {
  args: {
    context: false,
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
    mode: {
      name: 'Allow to select mode?',
      type: 'boolean',
    },
    startNewChat: {
      name: 'Allow to start new chat?',
      type: 'boolean',
    },
  },

  parameters: {
    controls: {
      exclude: /(isPending|isSendAllowed|tableActions)/g,
      hideNoControlsWarning: true,
    },
  },

  render({ context, mode, startNewChat, tableActions }) {
    return (
      <Chat context={context} mode={mode} startNewChat={startNewChat} tableActions={tableActions} />
    );
  },
};

// endregion Playgrounds
