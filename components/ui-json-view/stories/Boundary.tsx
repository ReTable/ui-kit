import { FC, PropsWithChildren } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { height as heightVar, root, width as widthVar } from './Boundary.css';

type Props = PropsWithChildren<{
  height: number;
  isVirtual: boolean;
  width: number;
}>;

export const Boundary: FC<Props> = ({ children, isVirtual, height, width }) => {
  const style = isVirtual
    ? assignInlineVars({
        [heightVar]: `${height}px`,
        [widthVar]: `${width}px`,
      })
    : {};

  return (
    <div className={root} style={style}>
      {children}
    </div>
  );
};
