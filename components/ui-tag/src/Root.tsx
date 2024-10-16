import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  className: string;
  onClick?: () => void;
  readOnly: boolean;
}>;

export function Root({ className, children, onClick, readOnly }: Props): ReactNode {
  if (onClick != null) {
    return (
      <button className={className} disabled={readOnly} onClick={onClick} type="button">
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
}
