import { ComponentType, MouseEventHandler, PropsWithChildren } from 'react';

// region Base Props

export type Type = 'button' | 'link' | 'visual';

type CommonProps = PropsWithChildren<{
  className?: string;
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
  onClick?: MouseEventHandler;
  testId?: string;
  /**
   * If provided, will be added as `data-track-id` attribute for analytics purposes.
   */
  trackId?: string;
  /**
   * The type of button to use. Supported `"button"`, `"link"` and `"visual"` values.
   *
   * @default button
   */
  type?: Type;
}>;

type ButtonProps = {
  type?: 'button';
};

type LinkProps = {
  type: 'link';

  /**
   * A URL to link to.
   *
   * Available only when `type` property is `"link"`.
   */
  href: string;
  /**
   * The relationship between the linked resource and the current page.
   *
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).
   *
   * Available only when `type` property is `"link"`.
   */
  rel?: string;
  /**
   * The target window for the link.
   *
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/target).
   *
   * Available only when `type` property is `"link"`.
   */
  target?: string;
};

type VisualProps = {
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
   * The visual style of the button.
   */
  variant: Variant;
};

export type VariantProps<Variant extends string> =
  | (VariantBaseProps<Variant> & ButtonProps)
  | (VariantBaseProps<Variant> & LinkProps)
  | (VariantBaseProps<Variant> & VisualProps);

// endregion
