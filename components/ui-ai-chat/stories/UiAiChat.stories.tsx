import { action } from '@storybook/addon-actions';
import { Decorator, Meta, StoryObj } from '@storybook/react';

import { UiAiChat, UiAiChatProps, Variant } from '~';

import { Chat } from './Chat';
import { Container } from './Container';
import { DEFAULT_MODE, MAX_PROMPT_LENGTH, MAX_TEMPERATURE, MIN_TEMPERATURE } from './const';

// region Meta

const meta: Meta<typeof UiAiChat> = {
  title: 'UiAiChat',

  component: UiAiChat,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof UiAiChat>;

const StoryDecorator: Decorator = (Story, context) => {
  return (
    <Container variant={context.args.variant as Variant}>
      <Story />
    </Container>
  );
};

function storyOf(args: Partial<UiAiChatProps> = {}): Story {
  return {
    args: {
      conversation: [],

      mode: DEFAULT_MODE,

      minTemperature: MIN_TEMPERATURE,
      maxTemperature: MAX_TEMPERATURE,

      maxPromptLength: MAX_PROMPT_LENGTH,

      temperature: 0.5,

      placeholder: 'Ask Universe',

      prompt: '',

      title: 'Chat with Universe',

      showSettings: false,

      variant: 'normal',

      ...args,
    },

    argTypes: {
      showSettings: {
        control: 'boolean',
      },

      variant: {
        control: 'radio',
        options: ['normal', 'condensed'],
      },
    },

    parameters: {
      controls: {
        include: /(showSettings|variant)/g,
        hideNoControlsWarning: true,
      },
    },

    decorators: [StoryDecorator],
  };
}

// endregion Story Utilities

// region Stories

export const Empty: Story = storyOf();

export const Pending: Story = storyOf({
  conversation: [
    {
      prompt: 'Please, help me with my task.',
    },
  ],
});

export const Answered: Story = storyOf({
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
});

export const TableAnswered: Story = storyOf({
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
});

export const Resend: Story = storyOf({
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
});

export const Long: Story = storyOf({
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
});

export const Settings: Story = storyOf({
  showSettings: true,
});

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
      exclude: /(showSettings|title|tableActions|variant)/g,
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
