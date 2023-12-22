import { ComponentType, useCallback } from 'react';

import { clsx } from 'clsx';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import { useSize } from '@tabula/use-size';

import { basePadding, itemHeight } from '../shared.css';
import { list, options, root } from './VirtualView.css';

import { Line } from '../Line';
import { Options } from '../Options';
import { Line as LineType, ViewComponentType } from '../types';

function itemKey(index: number, lines: LineType[]) {
  return lines[index].path;
}

const lineRenderer: ComponentType<ListChildComponentProps<LineType[]>> = ({
  index,
  data,
  style,
}) => {
  const line = data[index];

  return <Line line={line} style={style} />;
};

export const VirtualView: ViewComponentType = ({ className, lines }) => {
  const [ref, { height }] = useSize();

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
      <VariableSizeList<LineType[]>
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
      <Options className={options} />
    </div>
  );
};
