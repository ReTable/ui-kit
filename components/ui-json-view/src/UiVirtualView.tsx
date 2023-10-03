import { ComponentType, useCallback } from 'react';

import { useMeasure } from 'react-use';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import { height as lineHeight, verticalPadding } from './UiLine.css';

import { UiLine } from './UiLine';
import { Line, ViewComponentType } from './types';

function itemKey(index: number, lines: Line[]) {
  return lines[index].path;
}

const lineRenderer: ComponentType<ListChildComponentProps<Line[]>> = ({ index, data, style }) => {
  const line = data[index];

  return <UiLine line={line} style={style} />;
};

export const UiVirtualView: ViewComponentType = ({ className, lines }) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const itemSize = useCallback(
    (index: number) => {
      const { isFirst, isLast } = lines[index];

      let size = lineHeight;

      if (isFirst) {
        size += verticalPadding;
      }

      if (isLast) {
        size += verticalPadding;
      }

      return size;
    },
    [lines],
  );

  return (
    <div className={className} ref={ref}>
      <VariableSizeList<Line[]>
        height={height}
        itemCount={lines.length}
        itemSize={itemSize}
        itemKey={itemKey}
        itemData={lines}
        width="100%"
        overscanCount={Math.floor(height / lineHeight)}
      >
        {lineRenderer}
      </VariableSizeList>
    </div>
  );
};
