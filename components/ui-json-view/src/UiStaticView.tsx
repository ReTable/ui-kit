import { ReactNode } from 'react';

import { ViewComponentType } from './types';

export const UiStaticView: ViewComponentType = ({ className, count, lineRenderer: Line }) => {
  const lines: ReactNode[] = [];

  for (let index = 0; index < count; index += 1) {
    lines.push(<Line data={undefined} index={index} style={{}} />);
  }

  return <div className={className}>{lines}</div>;
};

UiStaticView.displayName = 'UiJsonView(UiStaticView)';
