import { ComponentType, useCallback } from 'react';

import { clsx } from 'clsx';
import { useMeasure } from 'react-use';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import { basePadding, itemHeight } from './UiJsonView.css';
import { list, options, root } from './UiVirtualView.css';

import { UiLine } from './UiLine';
import { UiOptions } from './UiOptions';
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

      let size = itemHeight;

      if (isFirst) {
        size += basePadding;
      }

      if (isLast) {
        size += basePadding;
      }

      return size;
    },
    [lines],
  );

  return (
    <div className={clsx(className, root)} ref={ref}>
      <VariableSizeList<Line[]>
        className={list}
        height={height}
        itemCount={lines.length}
        itemData={lines}
        itemKey={itemKey}
        itemSize={itemSize}
        overscanCount={Math.floor(height / itemHeight / 4)}
        width="100%"
      >
        {lineRenderer}
      </VariableSizeList>
      <UiOptions className={options} />
    </div>
  );
};
