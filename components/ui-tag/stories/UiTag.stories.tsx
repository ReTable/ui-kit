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
      exclude: /^(className|infoClassName|onClick|onDelete|icon)$/,
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
  size: UiTagProps['size'];
  text?: string;
};

function storyOf({
  hasIcon,
  isClickable,
  isDisabled,
  isRemovable,
  size,
  text = 'Column 1',
}: Options): StoryObj<Options> {
  return {
    argTypes: {
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
      hasIcon,
      isClickable,
      isDisabled,
      isRemovable,
      size,
      text,
    },
    render(props) {
      const tagProps: UiTagProps = {
        size: props.size,
        text: props.text ?? 'Column 1',
      };

      if (props.hasIcon) {
        tagProps.icon = UiDateIcon;
      }

      if (props.isClickable) {
        tagProps.onClick = action('on-click');
      }

      if (props.isDisabled) {
        tagProps.readOnly = isDisabled;
      }

      if (props.isRemovable) {
        tagProps.onDelete = action('on-delete');
      }

      return <UiTag {...tagProps} />;
    },
  };
}

// endregion Story Utilities

export const Default = storyOf({ size: 'small' });

// region Non-Interactive

export const NonInteractiveSmall = storyOf({ size: 'small' });

export const NonInteractiveMedium = storyOf({ size: 'medium' });

export const NonInteractiveSmallReadOnly = storyOf({ isDisabled: true, size: 'small' });

export const NonInteractiveMediumReadOnly = storyOf({ isDisabled: true, size: 'medium' });

// endregion Non-Interactive

// region Non-Interactive Deletable

export const NonInteractiveDeletableSmall = storyOf({ isRemovable: true, size: 'small' });

export const NonInteractiveDeletableMedium = storyOf({ isRemovable: true, size: 'medium' });

export const NonInteractiveDeletableSmallReadOnly = storyOf({
  isDisabled: true,
  isRemovable: true,
  size: 'small',
});

export const NonInteractiveDeletableMediumReadOnly = storyOf({
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
});

// endregion Non-Interactive Deletable

// region Interactive

export const InteractiveSmall = storyOf({ isClickable: true, size: 'small' });

export const InteractiveMedium = storyOf({ isClickable: true, size: 'medium' });

export const InteractiveSmallReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  size: 'small',
});

export const InteractiveMediumReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  size: 'medium',
});

// endregion Interactive

// region Interactive Deletable

export const InteractiveDeletableSmall = storyOf({
  isClickable: true,
  isRemovable: true,
  size: 'small',
});

export const InteractiveDeletableMedium = storyOf({
  isClickable: true,
  isRemovable: true,
  size: 'medium',
});

export const InteractiveDeletableSmallReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'small',
});

export const InteractiveDeletableMediumReadOnly = storyOf({
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
});

// endregion Interactive Deletable

// region Non-Interactive With Icon

export const NonInteractiveSmallWithIcon = storyOf({ hasIcon: true, size: 'small' });

export const NonInteractiveMediumWithIcon = storyOf({ hasIcon: true, size: 'medium' });

export const NonInteractiveSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  size: 'small',
});

export const NonInteractiveMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  size: 'medium',
});

// endregion Non-Interactive With Icon

// region Non-Interactive Deletable With Icon

export const NonInteractiveDeletableSmallWithIcon = storyOf({
  hasIcon: true,
  isRemovable: true,
  size: 'small',
});

export const NonInteractiveDeletableMediumWithIcon = storyOf({
  hasIcon: true,
  isRemovable: true,
  size: 'medium',
});

export const NonInteractiveDeletableSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  isRemovable: true,
  size: 'small',
});

export const NonInteractiveDeletableMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
});

// endregion Non-Interactive Deletable With Icon

// region Interactive With Icon

export const InteractiveSmallWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  size: 'small',
});

export const InteractiveMediumWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  size: 'medium',
});

export const InteractiveSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  size: 'small',
});

export const InteractiveMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  size: 'medium',
});

// endregion Interactive With Icon

// region Interactive Deletable With Icon

export const InteractiveDeletableSmallWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isRemovable: true,
  size: 'small',
});

export const InteractiveDeletableMediumWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isRemovable: true,
  size: 'medium',
});

export const InteractiveDeletableSmallReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'small',
});

export const InteractiveDeletableMediumReadOnlyWithIcon = storyOf({
  hasIcon: true,
  isClickable: true,
  isDisabled: true,
  isRemovable: true,
  size: 'medium',
});

// endregion Interactive Deletable With Icon
