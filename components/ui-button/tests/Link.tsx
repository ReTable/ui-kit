import { AnchorHTMLAttributes, FC } from 'react';

import { UiButtonLinkComponentProps } from '~';

export type LinkProps = Omit<
  UiButtonLinkComponentProps,
  keyof AnchorHTMLAttributes<HTMLAnchorElement>
>;

export const Link: FC<UiButtonLinkComponentProps> = ({
  children,
  preventScrollReset,
  relative,
  reloadDocument,
  replace,
  state,
  to,
  ...rest
}) => (
  <a
    data-prevent-scroll-reset={preventScrollReset}
    data-relative={relative}
    data-reload-document={reloadDocument}
    data-replace={replace}
    data-state={JSON.stringify(state)}
    data-to={typeof to === 'string' ? to : JSON.stringify(to)}
    {...rest}
  >
    {children}
  </a>
);
