import { FC, useMemo } from 'react';

import { UiJsonViewOptions } from './UiJsonViewOptions';
import { useCollapsedKeys } from './hooks';
import { useCollapsedLines } from './hooks/useCollapsedLines';
import { UiLine } from './pipeline';
import { isOpenLine, toLines } from './toLines';
import { JsonViewOptions } from './types';

export type Props = Partial<JsonViewOptions> & {
  className?: string;
  collapsed?: boolean | number;
  source: string;
};

export const UiJsonView: FC<Props> = ({
  className = '',
  collapsed = false,
  showServiceData,
  source,
}) => {
  // Step 1: Convert source string to the render lines.
  const allLines = useMemo(() => toLines(source), [source]);
  // Step 2: Initiate collapsed keys service.
  const [collapsedKeys, toggle] = useCollapsedKeys(allLines, collapsed);
  const lines = useCollapsedLines(allLines, collapsedKeys);

  return (
    <UiJsonViewOptions showServiceData={showServiceData} toggle={toggle}>
      <div className={className}>
        {lines.map((line) => {
          const isCollapsed = isOpenLine(line) && collapsedKeys.has(line.key);

          return <UiLine key={line.key} isCollapsed={isCollapsed} line={line} />;
        })}
      </div>
    </UiJsonViewOptions>
  );
};
