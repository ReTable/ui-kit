import { ComponentType, MouseEventHandler, PropsWithChildren } from 'react';

// region Base Props

type CommonProps = PropsWithChildren<{
  className?: string;
  isDisabled?: boolean;
  isFrozen?: boolean;
  trackId?: string;
}>;

type CommonAsButtonProps = {
  as?: 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type CommonAsLinkProps = {
  as: 'link';
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string;
};

// endregion

// region Inner Props

type InnerBaseProps = CommonProps & {
  hasIcon?: boolean;
  variantClassName: string;
};

export type InnerProps =
  | (InnerBaseProps & CommonAsButtonProps)
  | (InnerBaseProps & CommonAsLinkProps);

// endregion

// region Variant Props

type Icon = ComponentType<{ className?: string }>;

type VariantBaseProps<Variant extends string> = CommonProps & {
  icon?: Icon;
  variant: Variant;
};

export type VariantProps<Variant extends string> =
  | (VariantBaseProps<Variant> & CommonAsButtonProps)
  | (VariantBaseProps<Variant> & CommonAsLinkProps);

// endregion
