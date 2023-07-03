import { FC, MouseEventHandler, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  onClick: MouseEventHandler;
}>;

export const Button: FC<Props> = ({ children, onClick }: Props) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
