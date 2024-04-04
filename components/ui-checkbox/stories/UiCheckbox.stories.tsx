import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { UiCheckbox } from '~';

import * as Interactions from './Interactions';

// region Meta

const meta: Meta<typeof UiCheckbox> = {
  title: 'UiCheckbox',

  component: UiCheckbox,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof UiCheckbox>;

const staticParameters = {
  controls: {
    exclude: /.*/g,
    hideNoControlsWarning: true,
  },
};

const onChangeAction = action('onChange');

// region Story Utilities

// region Stories

export const Unchecked: Story = {
  args: {
    children: 'Is ugly?',
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const Checked: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const Indeterminate: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isIndeterminate: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const UncheckedDisabled: Story = {
  args: {
    children: 'Is ugly?',
    isDisabled: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const CheckedDisabled: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isDisabled: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const IndeterminateDisabled: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isDisabled: true,
    isIndeterminate: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

// endregion Stories

// region Playgrounds

export const SimpleInteraction: StoryObj<typeof Interactions.Simple> = {
  render() {
    return <Interactions.Simple />;
  },

  async play({ canvasElement, step }) {
    const canvas = within(canvasElement);

    await step('Check the input', async () => {
      await userEvent.click(await canvas.findByTestId('target'));
    });

    await step('Uncheck the input', async () => {
      await userEvent.click(await canvas.findByTestId('target'));
    });

    await step('Check the input', async () => {
      await userEvent.click(await canvas.findByTestId('target'));
    });
  },
};

export const ComplexInteraction: StoryObj<typeof Interactions.Complex> = {
  render() {
    return <Interactions.Complex />;
  },

  async play({ canvasElement, step }) {
    const canvas = within(canvasElement);

    await step('Check all', async () => {
      await userEvent.click(await canvas.findByTestId('check-all'));
    });

    await step('Uncheck all', async () => {
      await userEvent.click(await canvas.findByTestId('check-all'));
    });

    await step('Check 1', async () => {
      await userEvent.click(await canvas.findByTestId('check-1'));
    });

    await step('Check 3', async () => {
      await userEvent.click(await canvas.findByTestId('check-3'));
    });

    await step('Check 2', async () => {
      await userEvent.click(await canvas.findByTestId('check-2'));
    });

    await step('Uncheck 1', async () => {
      await userEvent.click(await canvas.findByTestId('check-1'));
    });

    await step('Uncheck 3', async () => {
      await userEvent.click(await canvas.findByTestId('check-3'));
    });

    await step('Uncheck 2', async () => {
      await userEvent.click(await canvas.findByTestId('check-2'));
    });

    await step('Check all', async () => {
      await userEvent.click(await canvas.findByTestId('check-all'));
    });
  },
};

export const Playground: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
  },
  argTypes: {
    children: {
      name: 'Label',
      type: 'string',
    },
    isChecked: {
      name: 'Is checked?',
      type: 'boolean',
    },
    isIndeterminate: {
      name: 'Is indeterminate?',
      type: 'boolean',
    },
    isDisabled: {
      name: 'Is disabled?',
      type: 'boolean',
    },
  },
  parameters: {
    controls: {
      exclude: /^(className|id|name|onChange|testId|trackId)$/g,
    },
  },
};

// endregion Playgrounds
