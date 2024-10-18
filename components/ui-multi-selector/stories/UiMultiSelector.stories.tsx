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
  empty?: string;
  isDisabled?: boolean;
  placeholder?: string;
  size: UiMultiSelectorSize;
  variant: UiMultiSelectorVariant;
};

/* eslint-disable react-hooks/rules-of-hooks, react/hook-use-state */
export const Default: StoryObj<Options> = {
  args: {
    empty: 'No columns selected',
    placeholder: 'Add column...',
    size: 'medium',
    variant: 'contrast',
  },

  argTypes: {
    isDisabled: {
      type: 'boolean',
      name: 'Is disabled?',
    },
  },

  render({ empty, placeholder, isDisabled, size, variant }) {
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
          empty={empty}
          isDisabled={isDisabled}
          onChange={onSetValue}
          options={options}
          placeholder={placeholder}
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
