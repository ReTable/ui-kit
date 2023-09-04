import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

export type Type = ButtonHTMLAttributes<HTMLButtonElement>['type'] | 'link' | 'visual';

type RestrictedProps = 'disabled';

// region Base Props

type CommonProps = PropsWithChildren<{
  /**
   * Whether the button is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the button is frozen.
   *
   * @default false
   */
  isFrozen?: boolean;
  testId?: string;
  /**
   * If provided, will be added as `data-track-id` attribute for analytics purposes.
   */
  trackId?: string;
  /**
   * The type of button to use. Supported `"button"`, `"submit"`, `"reset"`, `"link"` and `"visual"` values.
   *
   * @default button
   */
  type: Type;
}>;

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, RestrictedProps>;

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, RestrictedProps> & {
  type: 'link';
};

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, RestrictedProps> & {
  type: 'visual';
};

// endregion

// region Inner Props

type InnerBaseProps = CommonProps & {
  hasIcon?: boolean;
  variantClassName: string;
};

export type InnerProps =
  | (InnerBaseProps & ButtonProps)
  | (InnerBaseProps & AnchorProps)
  | (InnerBaseProps & DivProps);

// endregion

// region Variant Props

type Icon = ComponentType<{ className?: string }>;

type VariantBaseProps<Variant extends string> = CommonProps & {
  /**
   * The icon component.
   *
   * Should support `className` property.
   *
   * Recommended to use `16x16` icon.
   */
  icon?: Icon;
  /**
   * The visual style of the button.
   */
  variant: Variant;
};

export type VariantProps<Variant extends string> =
  | (VariantBaseProps<Variant> & ButtonProps)
  | (VariantBaseProps<Variant> & AnchorProps)
  | (VariantBaseProps<Variant> & DivProps);

// endregion
