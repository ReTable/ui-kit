import { ComponentType, MouseEventHandler, PropsWithChildren } from 'react';

// region Base Props

type CommonProps = PropsWithChildren<{
  /**
   * The type of button to use. Supported `button`, `link` and `visual` values.
   *
   * @default button
   */
  as: string;
  className?: string;
  /**
   * If `true`, the component is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true`, the component is frozen.
   *
   * @default false
   */
  isFrozen?: boolean;
  onClick?: MouseEventHandler;
  testId?: string;
  /**
   * If provided, will be added as `data-track-id` attribute for analytics purposes.
   */
  trackId?: string;
}>;

type ButtonProps = {
  as?: 'button';
};

type LinkProps = {
  as: 'link';
  /**
   * The link's URL.
   *
   * Available only when `as` property is `link`.
   */
  href?: string;
  /**
   * The link's target.
   *
   * Available only when `as` property is `link`.
   */
  target?: string;
};

type VisualProps = {
  as: 'visual';
};

// endregion

// region Inner Props

type InnerBaseProps = CommonProps & {
  hasIcon?: boolean;
  variantClassName: string;
};

export type InnerProps =
  | (InnerBaseProps & ButtonProps)
  | (InnerBaseProps & LinkProps)
  | (InnerBaseProps & VisualProps);

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
   * The color scheme variant.
   */
  variant: Variant;
};

export type VariantProps<Variant extends string> =
  | (VariantBaseProps<Variant> & ButtonProps)
  | (VariantBaseProps<Variant> & LinkProps)
  | (VariantBaseProps<Variant> & VisualProps);

// endregion
