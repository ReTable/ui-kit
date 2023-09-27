import { FC } from 'react';

import { UiJsonViewOptions } from './UiJsonViewOptions';
import { useCollapsedKeys, useCollapsedLines, useLines } from './hooks';
import { isOpenLine } from './lines';
import { UiLine } from './pipeline';
import { JsonViewOptions } from './types';

export type Props = Partial<JsonViewOptions> & {
  className?: string;
  collapsed?: boolean | number;
  source: string;
};

export const UiJsonView: FC<Props> = ({
  className = '',
  collapsed = false,
  showDataTypes,
  showObjectSize,
  source,
}) => {
  // Step 1: Convert source string to the render lines.
  const allLines = useLines(source);
  // Step 2: Initiate collapsed keys service.
  const [collapsedKeys, toggle] = useCollapsedKeys(allLines, collapsed);
  // Step 3: Filter collapsed lines.
  const lines = useCollapsedLines(allLines, collapsedKeys);

  return (
    <UiJsonViewOptions
      showDataTypes={showDataTypes}
      showObjectSize={showObjectSize}
      toggle={toggle}
    >
      <div className={className}>
        {lines.map((line) => {
          const isCollapsed = isOpenLine(line) && collapsedKeys.has(line.key);

          return <UiLine key={line.key} isCollapsed={isCollapsed} line={line} />;
        })}
      </div>
    </UiJsonViewOptions>
  );
};
