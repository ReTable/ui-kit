import { ComponentType, MouseEventHandler, PropsWithChildren } from 'react';

// region Base Props

type CommonProps = PropsWithChildren<{
  className?: string;
  isDisabled?: boolean;
  isFrozen?: boolean;
  trackId?: string;
}>;

type ButtonProps = {
  as?: 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type LinkProps = {
  as: 'link';
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string;
};

type VisualProps = {
  as: 'visual';
  onClick?: MouseEventHandler<HTMLDivElement>;
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
  icon?: Icon;
  variant: Variant;
};

export type VariantProps<Variant extends string> =
  | (VariantBaseProps<Variant> & ButtonProps)
  | (VariantBaseProps<Variant> & LinkProps)
  | (VariantBaseProps<Variant> & VisualProps);

// endregion
