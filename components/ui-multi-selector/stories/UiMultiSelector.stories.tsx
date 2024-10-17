import { useCallback, useMemo, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import * as icons from '@tabula/ui-data-type-icon';

import { UiMultiSelector, UiMultiSelectorProps } from '~';

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
  trigger?: string;
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Default: StoryObj<Options> = {
  parameters: {
    controls: {
      include: /^(empty|isDisabled|placeholder|trigger)$/,
      exclude: /.*/,
    },
  },

  render({
    isDisabled,
    placeholder = 'This is placeholder',
    trigger = 'Trigger',
    empty = 'Empty',
  }) {
    const [items, setItems] = useState<UiMultiSelectorProps['items']>([]);

    const config = useMemo<UiMultiSelectorProps['config']>(
      () =>
        Object.entries(icons).reduce<UiMultiSelectorProps['config']>((result, [key, value]) => {
          if (typeof value !== 'string') {
            result.push({
              id: key,

              leftIcon: value,
              content: key.slice(2, -4),

              onClick: () => {
                const item = {
                  key,

                  icon: value,
                  content: key.slice(2, -4),

                  onRemove: () => {
                    setItems((current) => current.filter((it) => it.key === key));
                  },
                };

                setItems((current) => [...current, item]);
              },
            });
          }

          return result;
        }, []),
      [],
    );

    const handleClear = useCallback(() => {
      setItems([]);
    }, []);

    return (
      <UiMultiSelector
        config={config}
        emptyContent={empty}
        items={items}
        onClear={handleClear}
        placeholder={placeholder}
        readOnly={isDisabled}
        triggerContent={trigger}
      />
    );
  },
};
/* eslint-enable */
