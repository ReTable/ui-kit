import { useMemo, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import * as icons from '@tabula/ui-data-type-icon';

import {
  UiMultiSelector,
  UiMultiSelectorCompleteKey,
  UiMultiSelectorOption,
  UiMultiSelectorSize,
  UiMultiSelectorVariant,
  searchPlaceholder,
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
  allowsCustomValue?: boolean;
  completeKey?: UiMultiSelectorCompleteKey;
  defaultPlaceholder?: string;
  disabledPlaceholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isWarning?: boolean;
  maxSelectedLimit?: number;
  selectAll?: boolean;
  selectFound?: boolean;
  size: UiMultiSelectorSize;
  variant: UiMultiSelectorVariant;
  withDropdownChevron?: boolean;
};

/* eslint-disable react/hook-use-state */
export const Default: StoryObj<Options> = {
  args: {
    defaultPlaceholder: 'Add column...',
    disabledPlaceholder: 'No columns selected',
    size: 'medium',
    variant: 'contrast',
  },

  argTypes: {
    allowsCustomValue: {
      control: 'boolean',
      name: 'Is allows custom value?',
    },
    completeKey: {
      name: 'Complete key',
    },
    defaultPlaceholder: {
      control: 'text',
      name: 'Placeholder',
    },
    disabledPlaceholder: {
      control: 'text',
      name: 'Empty placeholder',
    },
    isDisabled: {
      control: 'boolean',
      name: 'Is disabled?',
    },
    isInvalid: {
      control: 'boolean',
      name: 'Is invalid?',
    },
    isWarning: {
      control: 'boolean',
      name: 'Is warning?',
    },
    maxSelectedLimit: {
      control: 'number',
      name: 'Maximum count of selected items',
    },
    size: {
      name: 'Size',
    },
    variant: {
      name: 'Variant',
    },
    withDropdownChevron: {
      control: 'boolean',
      name: 'Has dropdown chevron?',
    },
  },

  render({
    allowsCustomValue,
    completeKey,
    defaultPlaceholder,
    disabledPlaceholder,
    isDisabled,
    isInvalid,
    isWarning,
    maxSelectedLimit,
    selectAll,
    selectFound,
    size,
    variant,
    withDropdownChevron,
  }) {
    const [selected, onSetSelected] = useState(
      () => new Set<string>(['UiDateIcon', 'UiStringIcon', 'UiIntegerIcon']),
    );

    const options = useMemo(
      () =>
        Object.entries(icons).reduce<UiMultiSelectorOption[]>((result, [name, icon]) => {
          if (typeof icon !== 'string') {
            result.push({
              icon: size === 'small' ? undefined : icon,
              label: name,

              value: name,
            });
          }

          return result;
        }, []),
      [size],
    );

    return (
      <div
        style={{
          width: '362px',
          padding: '20px',
          backgroundColor: variant === 'contrast' ? '#f8f8f8' : 'transparent',
        }}
      >
        <UiMultiSelector
          allowsCustomValue={allowsCustomValue}
          completeKey={completeKey}
          defaultPlaceholder={defaultPlaceholder}
          disabledPlaceholder={disabledPlaceholder}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isWarning={isWarning}
          maxSelectedLimit={maxSelectedLimit}
          onChange={onSetSelected}
          options={options}
          selectAll={selectAll == null ? undefined : 'Select all'}
          selectFound={
            selectFound == null ? undefined : `Select found containing ${searchPlaceholder}`
          }
          selected={selected}
          size={size}
          variant={variant}
          withDropdownChevron={withDropdownChevron}
        />
      </div>
    );
  },

  parameters: {
    controls: {
      exclude: /^(className|onChange|options|selectAll|selectFound|selected)$/,
    },
  },
};
/* eslint-enable */
