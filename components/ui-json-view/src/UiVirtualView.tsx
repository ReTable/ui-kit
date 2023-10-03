import { ComponentType, useCallback } from 'react';

import { useMeasure } from 'react-use';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import { height as lineHeight, verticalPadding } from './UiLine.css';
import { root } from './UiVirtualView.css';

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
        className={root}
        height={height}
        itemCount={lines.length}
        itemData={lines}
        itemKey={itemKey}
        itemSize={itemSize}
        overscanCount={Math.floor(height / lineHeight)}
        width="100%"
      >
        {lineRenderer}
      </VariableSizeList>
    </div>
  );
};
