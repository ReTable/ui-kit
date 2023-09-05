import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

export type Element = 'button' | 'a' | 'div';

type RestrictedProps = 'aria-disabled' | 'disabled';

type Icon = ComponentType<{ className?: string }>;

// region Base Props

type CommonProps = PropsWithChildren<{
  /**
   * The HTML element which will be used for button rendering. Supported `button`, `a` and `div`.
   *
   * @default button
   */
  as?: Element;
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
}>;

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, RestrictedProps> & {
  as?: 'button';
};

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, RestrictedProps> & {
  as: 'a';
};

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, RestrictedProps> & {
  as: 'div';
};

// endregion

// region Inner Props

type InnerBaseProps = CommonProps & {
  iconClassName?: string;
  leftIcon?: Icon;
  rightIcon?: Icon;
  variantClassName: string;
};

export type InnerProps =
  | (InnerBaseProps & ButtonProps)
  | (InnerBaseProps & AnchorProps)
  | (InnerBaseProps & DivProps);

// endregion

// region Variant Props

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
