import { AnchorHTMLAttributes, FC } from 'react';

type Path = {
  pathname?: string;
  search?: string;
  hash?: string;
};

export type LinkProps = {
  preventScrollReset?: boolean;
  relative?: 'route' | 'path';
  reloadDocument?: boolean;
  replace?: boolean;
  state?: unknown;
  to: string | Path;
};

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & LinkProps;

export const Link: FC<Props> = ({
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
