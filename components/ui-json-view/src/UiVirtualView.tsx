import { useMeasure } from 'react-use';
import { FixedSizeList } from 'react-window';

import { height as lineHeight } from './UiLine.css';

import { ViewComponentType } from './types';

export const UiVirtualView: ViewComponentType = ({ className, count, lineRenderer }) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <div className={className} ref={ref}>
      <FixedSizeList
        direction="vertical"
        height={height}
        itemCount={count}
        itemSize={lineHeight}
        width="100%"
        overscanCount={Math.floor(height / lineHeight)}
      >
        {lineRenderer}
      </FixedSizeList>
    </div>
  );
};
