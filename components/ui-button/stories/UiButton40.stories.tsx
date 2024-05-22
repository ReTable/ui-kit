import { StoryObj } from '@storybook/react';
import { sentenceCase } from 'change-case';

import { UiButton40, UiButton40Props } from '~';

import {
  AddIcon,
  ArgsOf,
  Link as LinkComponent,
  argTypes as baseArgTypes,
  controls,
  toProps,
} from './components';

// region Args

type Args = ArgsOf<UiButton40Props>;

const argTypes = structuredClone(baseArgTypes);

argTypes.variant.options = ['contract'];

// endregion Args

// region Meta

const meta = {
  title: 'UiButton40',

  argTypes,

  component: UiButton40,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<UiButton40Props>;

type UserProps = Pick<UiButton40Props, 'children' | 'icon' | 'isDisabled' | 'isFrozen'> & {
  name?: string;
  trackId?: string;
};

function buttonStory({ name, trackId, ...props }: UserProps = {}): Story {
  const fullName = name == null ? 'Button' : `Button: ${name}`;

  return {
    name: fullName,

    args: {
      as: 'button',
      children: fullName,
      variant: 'primary',

      ...props,

      // @ts-expect-error data attributes is allowed
      ['data-track-id']: trackId,
    },

    parameters: {
      controls: {
        include: /^&/g,
        hideNoControlsWarning: true,
      },
    },

    tags: ['!dev'],
  };
}

function anchorStory({ name, trackId, ...props }: UserProps = {}): Story {
  const fullName = name == null ? 'Anchor' : `Anchor: ${name}`;

  return {
    name: fullName,

    args: {
      as: 'a',
      children: fullName,
      href: '#',
      target: '_blank',
      variant: 'primary',

      ...props,

      // @ts-expect-error data attributes is allowed
      ['data-track-id']: trackId,
    },

    parameters: {
      controls: {
        include: /^&/g,
        hideNoControlsWarning: true,
      },
    },

    tags: ['!dev'],
  };
}

function divStory({ name, trackId, ...props }: UserProps = {}): Story {
  const fullName = name == null ? 'Div' : `Div ${name}`;

  return {
    name: fullName,

    args: {
      as: 'div',
      children: fullName,
      variant: 'primary',

      ...props,

      // @ts-expect-error data attributes is allowed
      ['data-track-id']: trackId,
    },

    parameters: {
      controls: {
        include: /^&/g,
        hideNoControlsWarning: true,
      },
    },

    tags: ['!dev'],
  };
}

function linkStory({ name, trackId, ...props }: UserProps = {}): Story {
  const fullName = name == null ? 'Link' : `Link: ${name}`;

  return {
    name: fullName,

    args: {
      as: 'link',
      children: fullName,
      component: LinkComponent,
      target: '_blank',
      to: '#',
      variant: 'primary',

      ...props,

      // @ts-expect-error data attributes is allowed
      ['data-track-id']: trackId,
    },

    parameters: {
      controls: {
        include: /^&/g,
        hideNoControlsWarning: true,
      },
    },

    tags: ['!dev'],
  };
}

function variantStory(variant: UiButton40Props['variant']): Story {
  const fullName = `Variant: ${sentenceCase(variant)}`;

  return {
    name: fullName,

    args: {
      as: 'button',
      children: fullName,
      variant,
    },

    parameters: {
      backgrounds: {
        default: variant === 'secondaryDark' ? 'dark' : 'light',
      },
      controls: {
        include: /^&/g,
        hideNoControlsWarning: true,
      },
    },

    tags: ['!dev'],
  };
}

// endregion Story Utilities

// region Playground

export const Playground: StoryObj<Args> = {
  args: {
    as: 'button',
    label: 'Press me!',
    variant: 'primary',
  },

  parameters: {
    controls,
  },

  render(args: Args) {
    return <UiButton40 {...toProps(args, AddIcon)} />;
  },
};

// endregion Playground

// region Default

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'primary',
  },

  tags: ['!dev'],
};

// endregion Default

// region Button

export const Button = buttonStory();

export const ButtonDisabled: Story = buttonStory({
  isDisabled: true,
  name: 'Disabled',
});

export const ButtonFrozen: Story = buttonStory({
  isFrozen: true,
  name: 'Frozen',
});

export const ButtonDisabledAndFrozen: Story = buttonStory({
  isDisabled: true,
  isFrozen: true,
  name: 'Disabled and Frozen',
});

export const ButtonWithIcon: Story = buttonStory({
  icon: AddIcon,
  name: 'With Icon',
});

export const ButtonWithTrackId: Story = buttonStory({
  name: 'With Track Id',
  trackId: 'anchor',
});

// endregion Button

// region Anchor

export const Anchor = anchorStory();

export const AnchorDisabled: Story = anchorStory({
  isDisabled: true,
  name: 'Disabled',
});

export const AnchorFrozen: Story = anchorStory({
  isFrozen: true,
  name: 'Frozen',
});

export const AnchorDisabledAndFrozen: Story = anchorStory({
  isDisabled: true,
  isFrozen: true,
  name: 'Disabled and Frozen',
});

export const AnchorWithIcon: Story = anchorStory({
  icon: AddIcon,
  name: 'With Icon',
});

export const AnchorWithTrackId: Story = anchorStory({
  name: 'With Track Id',
  trackId: 'anchor',
});

// endregion Anchor

// region Div

export const Div = divStory();

export const DivDisabled: Story = divStory({
  isDisabled: true,
  name: 'Disabled',
});

export const DivFrozen: Story = divStory({
  isFrozen: true,
  name: 'Frozen',
});

export const DivDisabledAndFrozen: Story = divStory({
  isDisabled: true,
  isFrozen: true,
  name: 'Disabled and Frozen',
});

export const DivWithIcon: Story = divStory({
  icon: AddIcon,
  name: 'With Icon',
});

export const DivWithTrackId: Story = divStory({
  name: 'With Track Id',
  trackId: 'anchor',
});

// endregion Div

// region Link

export const Link = linkStory();

export const LinkDisabled: Story = linkStory({
  isDisabled: true,
  name: 'Disabled',
});

export const LinkFrozen: Story = linkStory({
  isFrozen: true,
  name: 'Frozen',
});

export const LinkDisabledAndFrozen: Story = linkStory({
  isDisabled: true,
  isFrozen: true,
  name: 'Disabled and Frozen',
});

export const LinkWithIcon: Story = linkStory({
  icon: AddIcon,
  name: 'With Icon',
});

export const LinkWithTrackId: Story = linkStory({
  name: 'With Track Id',
  trackId: 'anchor',
});

// endregion Link

// region Variants

export const VariantPrimary = variantStory('primary');

export const VariantSecondary = variantStory('secondary');

export const VariantSecondaryBlue = variantStory('secondaryBlue');

export const VariantSecondaryFilled = variantStory('secondaryFilled');

export const VariantSecondaryDark = variantStory('secondaryDark');

// endregion Variants
