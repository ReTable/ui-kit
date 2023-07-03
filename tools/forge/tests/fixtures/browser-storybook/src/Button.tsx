import { FC, MouseEventHandler, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  /**
   * This is click handler.
   */
  onClick: MouseEventHandler;
}>;

/**
 * This is awesome component.
 */
export const Button: FC<Props> = ({ children, onClick }: Props) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
