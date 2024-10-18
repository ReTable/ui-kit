import { useMemo, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import * as icons from '@tabula/ui-data-type-icon';

import {
  UiMultiSelector,
  UiMultiSelectorOption,
  UiMultiSelectorSize,
  UiMultiSelectorVariant,
} from '~';

// region Meta

const meta: Meta<typeof UiMultiSelector> = {
  title: 'UiMultiSelector',

  component: UiMultiSelector,
};

export default meta;

// endregion Meta

// region Story Utilities

type Options = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  size: UiMultiSelectorSize;
  variant: UiMultiSelectorVariant;
};

/* eslint-disable react-hooks/rules-of-hooks, react/hook-use-state */
export const Default: StoryObj<Options> = {
  args: {
    emptyPlaceholder: 'No columns selected',
    defaultPlaceholder: 'Add column...',
    size: 'medium',
    variant: 'contrast',
  },

  argTypes: {
    isDisabled: {
      type: 'boolean',
      name: 'Is disabled?',
    },
  },

  render({ emptyPlaceholder, defaultPlaceholder, isDisabled, size, variant }) {
    const [value, onSetValue] = useState(
      () => new Set<string>(['UiDateIcon', 'UiStringIcon', 'UiIntegerIcon']),
    );

    const options = useMemo(
      () =>
        Object.entries(icons).reduce<UiMultiSelectorOption[]>((result, [name, icon]) => {
          if (typeof icon !== 'string') {
            result.push({
              id: name,

              icon: size === 'small' ? undefined : icon,
              label: name,
            });
          }

          return result;
        }, []),
      [size],
    );

    return (
      <div style={{ width: '362px', padding: '20px' }}>
        <UiMultiSelector
          emptyPlaceholder={emptyPlaceholder}
          isDisabled={isDisabled}
          onChange={onSetValue}
          options={options}
          defaultPlaceholder={defaultPlaceholder}
          size={size}
          value={value}
          variant={variant}
        />
      </div>
    );
  },

  parameters: {
    controls: {
      exclude: /^(value)$/,
    },
  },
};
/* eslint-enable */
