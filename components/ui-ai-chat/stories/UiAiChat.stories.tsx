import { action } from '@storybook/addon-actions';
import { Decorator, Meta, StoryObj } from '@storybook/react';

import { UiAiChat, UiAiChatProps } from '~';

import { Chat } from './Chat';
import { Container, Variant } from './Container';
import { EmptyPlaceholder } from './EmptyPlaceholder';
import { MAX_PROMPT_LENGTH } from './const';

// region Meta

const meta: Meta<typeof UiAiChat> = {
  title: 'UiAiChat',

  component: UiAiChat,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<UiAiChatProps & { variant: Variant }>;

const StoryDecorator: Decorator = (Story, context) => {
  return (
    <Container variant={context.args.variant as Variant}>
      <Story />
    </Container>
  );
};

function storyOf(args: Partial<UiAiChatProps & { variant: Variant }> = {}): Story {
  return {
    args: {
      conversation: [],
      maxPromptLength: MAX_PROMPT_LENGTH,

      placeholder: 'Ask Universe',

      onSend: action('on-send'),
      onResend: action('on-resend'),

      variant: 'normal',

      ...args,
    },

    argTypes: {
      variant: {
        control: 'radio',
        options: ['normal', 'condensed'],
      },
    },

    parameters: {
      controls: {
        include: /(variant)/g,
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

export const PendingPlaceholder: Story = storyOf({
  conversation: [
    {
      prompt: 'Please, help me with my task.',
    },
  ],

  pendingPlaceholder: 'Searching answer for 42...',
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

export const Placeholder: Story = storyOf({
  empty: () => <EmptyPlaceholder />,
});

// endregion Stories

// region Playgrounds

export const Playground: StoryObj<typeof Chat> = {
  args: {
    tableActions: [
      {
        label: 'Copy Table',
        action: action('copy-table'),
      },
    ],
    variant: 'normal',
  },

  argTypes: {
    variant: {
      control: 'radio',
      options: ['normal', 'condensed'],
    },
  },

  parameters: {
    controls: {
      exclude: /(tableActions)/g,
      hideNoControlsWarning: true,
    },
  },

  render({ tableActions, variant }) {
    return <Chat tableActions={tableActions} variant={variant} />;
  },
};

// endregion Playgrounds
