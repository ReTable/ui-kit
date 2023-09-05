import { FC } from 'react';

import { UiButtonLinkComponentProps } from '~';

export const Link: FC<UiButtonLinkComponentProps> = ({ children, to, ...rest }) => (
  <a href={typeof to === 'string' ? to : JSON.stringify(to)} {...rest}>
    {children}
  </a>
);
