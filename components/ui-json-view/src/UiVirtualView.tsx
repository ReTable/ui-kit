import { useCallback } from 'react';

import { useMeasure } from 'react-use';
import { VariableSizeList } from 'react-window';

import { height as lineHeight, verticalPadding } from './UiLine.css';

import { ViewComponentType } from './types';

export const UiVirtualView: ViewComponentType = ({ className, count, lineRenderer }) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const itemSize = useCallback(
    (index: number) => {
      if (index === 0 && count === 1) {
        return verticalPadding + lineHeight + verticalPadding;
      }

      if (index === 0 || index === count - 1) {
        return lineHeight + verticalPadding;
      }

      return lineHeight;
    },
    [count],
  );

  return (
    <div className={className} ref={ref}>
      <VariableSizeList
        direction="vertical"
        height={height}
        itemCount={count}
        itemSize={itemSize}
        width="100%"
        overscanCount={Math.floor(height / lineHeight)}
      >
        {lineRenderer}
      </VariableSizeList>
    </div>
  );
};
