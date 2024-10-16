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
        variant: props.variant ?? 'contrast',
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

export const Default = storyOf({ size: 'medium', variant: 'contrast' });

// region Non-Interactive

export const NonInteractiveSmall = storyOf({ size: 'small', variant: 'contrast' });

export const NonInteractiveMedium = storyOf({ size: 'medium', variant: 'contrast' });

export const NonInteractiveLarge = storyOf({ size: 'large', variant: 'contrast' });

export const NonInteractiveSmallReadOnly = storyOf({
  isDisabled: true,
  size: 'small',
  variant: 'contrast',
});

export const NonInteractiveMediumReadOnly = storyOf({
  isDisabled: true,
  size: 'medium',
  variant: 'contrast',
});

export const NonInteractiveLargeReadOnly = storyOf({
  isDisabled: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Non-Interactive

// region Non-Interactive Deletable

export const NonInteractiveDeletableSmall = storyOf({
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const NonInteractiveDeletableMedium = storyOf({
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const NonInteractiveDeletableLarge = storyOf({
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

export const NonInteractiveDeletableSmallReadOnly = storyOf({
  isDisabled: true,
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const NonInteractiveDeletableMediumReadOnly = storyOf({
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const NonInteractiveDeletableLargeReadOnly = storyOf({
  isDisabled: true,
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Non-Interactive Deletable

// region Interactive

export const InteractiveSmall = storyOf({ isClickable: true, size: 'small', variant: 'contrast' });

export const InteractiveMedium = storyOf({
  isClickable: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveLarge = storyOf({ isClickable: true, size: 'large', variant: 'contrast' });

export const InteractiveSmallReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  size: 'small',
  variant: 'contrast',
});

export const InteractiveMediumReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveLargeReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Interactive

// region Interactive Deletable

export const InteractiveDeletableSmall = storyOf({
  isClickable: true,
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const InteractiveDeletableMedium = storyOf({
  isClickable: true,
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveDeletableLarge = storyOf({
  isClickable: true,
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

export const InteractiveDeletableSmallReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const InteractiveDeletableMediumReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveDeletableLargeReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Interactive Deletable

// region Non-Interactive With Icon

export const NonInteractiveSmallWithIcon = storyOf({
  hasIcon: true,
  size: 'small',
  variant: 'contrast',
});

export const NonInteractiveMediumWithIcon = storyOf({
  hasIcon: true,
  size: 'medium',
  variant: 'contrast',
});

export const NonInteractiveLargeWithIcon = storyOf({
  hasIcon: true,
  size: 'large',
  variant: 'contrast',
});

export const NonInteractiveSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  size: 'small',
  variant: 'contrast',
});

export const NonInteractiveMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  size: 'medium',
  variant: 'contrast',
});

export const NonInteractiveLargeReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Non-Interactive With Icon

// region Non-Interactive Deletable With Icon

export const NonInteractiveDeletableSmallWithIcon = storyOf({
  hasIcon: true,
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const NonInteractiveDeletableMediumWithIcon = storyOf({
  hasIcon: true,
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const NonInteractiveDeletableLargeWithIcon = storyOf({
  hasIcon: true,
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

export const NonInteractiveDeletableSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const NonInteractiveDeletableMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const NonInteractiveDeletableLargeReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Non-Interactive Deletable With Icon

// region Interactive With Icon

export const InteractiveSmallWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  size: 'small',
  variant: 'contrast',
});

export const InteractiveMediumWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveLargeWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  size: 'large',
  variant: 'contrast',
});

export const InteractiveSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  size: 'small',
  variant: 'contrast',
});

export const InteractiveMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveLargeReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Interactive With Icon

// region Interactive Deletable With Icon

export const InteractiveDeletableSmallWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const InteractiveDeletableMediumWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveDeletableLargeWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

export const InteractiveDeletableSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'small',
  variant: 'contrast',
});

export const InteractiveDeletableMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
  variant: 'contrast',
});

export const InteractiveDeletableLargeReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'large',
  variant: 'contrast',
});

// endregion Interactive Deletable With Icon
