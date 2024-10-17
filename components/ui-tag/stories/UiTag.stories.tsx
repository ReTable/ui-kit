import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { UiDateIcon } from '@tabula/ui-data-type-icon';

import { UiTag, UiTagProps } from '~';

// region Meta

const meta: Meta<typeof UiTag> = {
  title: 'UiTag',

  component: UiTag,

  parameters: {
    controls: {
      exclude: /^(children|className|onClick|onRemove|icon)$/,
    },
  },
};

export default meta;

// endregion Meta

// region Story Utilities

type Options = {
  hasIcon?: boolean;
  isClickable?: boolean;
  isDisabled?: boolean;
  isRemovable?: boolean;
  label?: string;
  size: UiTagProps['size'];
  variant: UiTagProps['variant'];
};

function storyOf({
  hasIcon,
  isClickable,
  isDisabled,
  isRemovable,
  size,
  label = 'created_at',
}: Options): StoryObj<Options> {
  return {
    argTypes: {
      label: {
        name: 'Label',
        type: 'string',
      },
      hasIcon: {
        name: 'Has icon?',
        type: 'boolean',
      },
      isClickable: {
        name: 'Is clickable?',
        type: 'boolean',
      },
      isRemovable: {
        name: 'Is can be deleted?',
        type: 'boolean',
      },
      isDisabled: {
        name: 'Is disabled?',
        type: 'boolean',
      },
    },
    args: {
      label,
      hasIcon,
      isClickable,
      isDisabled,
      isRemovable,
      size,
    },
    render(props) {
      const tagProps: UiTagProps = {
        size: props.size,
        children: props.label ?? 'created_at',
        variant: props.variant,
      };

      if (props.hasIcon) {
        tagProps.icon = UiDateIcon;
      }

      if (props.isClickable) {
        tagProps.onClick = action('on-click');
      }

      if (props.isDisabled) {
        tagProps.isDisabled = props.isDisabled;
      }

      if (props.isRemovable) {
        tagProps.onRemove = action('on-remove');
      }

      return <UiTag {...tagProps} />;
    },
  };
}

// endregion Story Utilities

export const Playground = storyOf({ size: 'medium', variant: 'contrast' });
