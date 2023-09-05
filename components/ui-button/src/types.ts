import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

export type Element = 'button' | 'a' | 'div' | 'link';

type RestrictedProps = 'aria-disabled' | 'disabled';

type IconComponent = ComponentType<{ className?: string }>;

type RouterLinkPath = {
  /**
   * A URL pathname, beginning with a /.
   */
  pathname?: string;

  /**
   * A URL search string, beginning with a ?.
   */
  search?: string;

  /**
   * A URL fragment identifier, beginning with a #.
   */
  hash?: string;
};

type LinkProps = {
  /**
   * See [React Router docs](https://reactrouter.com/en/main/components/link#preventscrollreset).
   *
   * Available only if `as` equals to `link`.
   */
  preventScrollReset?: boolean;
  /**
   * See [React Router docs](https://reactrouter.com/en/main/components/link#relative).
   *
   * Available only if `as` equals to `link`.
   */
  relative?: 'route' | 'path';
  /**
   * See [React Router docs](https://reactrouter.com/en/main/components/link#reloaddocument).
   *
   * Available only if `as` equals to `link`.
   */
  reloadDocument?: boolean;
  /**
   * See [React Router docs](https://reactrouter.com/en/main/components/link#replace).
   *
   * Available only if `as` equals to `link`.
   */
  replace?: boolean;
  /**
   * See [React Router docs](https://reactrouter.com/en/main/components/link#state).
   *
   * Available only if `as` equals to `link`.
   */
  state?: unknown;
  /**
   * See [React Router docs](https://reactrouter.com/en/main/components/link).
   *
   * Available only if `as` equals to `link`.
   */
  to: string | RouterLinkPath;
};

type LinkComponent = ComponentType<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & LinkProps
>;

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

type RouterLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, RestrictedProps | 'href'> &
  LinkProps & {
    as: 'link';

    component: LinkComponent;
  };

// endregion

// region Inner Props

type InnerBaseProps = CommonProps & {
  iconClassName?: string;
  leftIcon?: IconComponent;
  rightIcon?: IconComponent;
  variantClassName: string;
};

export type InnerProps =
  | (InnerBaseProps & ButtonProps)
  | (InnerBaseProps & AnchorProps)
  | (InnerBaseProps & DivProps)
  | (InnerBaseProps & RouterLinkProps);

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
  icon?: IconComponent;
  /**
   * The visual style of the button.
   */
  variant: Variant;
};

export type VariantProps<Variant extends string> =
  | (VariantBaseProps<Variant> & ButtonProps)
  | (VariantBaseProps<Variant> & AnchorProps)
  | (VariantBaseProps<Variant> & DivProps)
  | (VariantBaseProps<Variant> & RouterLinkProps);

// endregion
