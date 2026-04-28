import { ReactElement, useCallback, useMemo } from 'react';

import { clsx } from 'clsx/lite';
import { List, RowComponentProps } from 'react-window';

import { useSize } from '@tabula/use-size';

import { basePadding, itemHeight } from '../shared.css';
import { list, options, root } from './VirtualView.css';

import { Line } from '../Line';
import { Options } from '../Options';
import { Line as LineType, ViewComponentType } from '../types';

type RowProps = {
  lines: LineType[];
};

function lineRenderer({
  index,
  lines,
  style,
}: RowComponentProps<RowProps>): ReactElement {
  const line = lines[index];

  return <Line line={line} style={style} />;
}

export const VirtualView: ViewComponentType = ({ className, lines }) => {
  const [ref, { height }] = useSize();

  const rowProps = useMemo<RowProps>(() => ({ lines }), [lines]);

  const rowHeight = useCallback(
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
      <List<RowProps>
        className={list}
        rowComponent={lineRenderer}
        rowCount={lines.length}
        rowHeight={rowHeight}
        rowProps={rowProps}
        overscanCount={Math.floor(height / itemHeight / 4)}
        style={{ height, width: '100%' }}
      />
      <Options className={options} />
    </div>
  );
};
