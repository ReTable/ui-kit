import { FC } from 'react';

import { clsx } from 'clsx';

import { container } from './style.css';

import { UiLine } from './UiLine';
import { UiOptions } from './UiOptions';
import { useCollapsedKeys, useCollapsedLines, useLines } from './hooks';
import { JsonViewOptions, LineKind } from './types';

export type Props = Partial<JsonViewOptions> & {
  className?: string;
  collapsed?: boolean | number;
  limit?: number;
  source: string;
};

export const UiJsonView: FC<Props> = ({
  className = '',
  collapsed,
  isInteractive,
  limit,
  showDataTypes,
  showObjectSize,
  source,
}) => {
  const [allowInteractions, maxNumberOfLines] =
    limit != null && limit > 0 ? [false, limit] : [isInteractive, Number.POSITIVE_INFINITY];

  // Step 1: Convert source string to the render lines.
  const allLines = useLines(source, maxNumberOfLines);
  // Step 2: Initiate collapsed keys service.
  const [collapsedKeys, toggle] = useCollapsedKeys(allLines, allowInteractions ? collapsed : false);
  // Step 3: Filter collapsed lines.
  const lines = useCollapsedLines(allLines, collapsedKeys);

  const containerClassName =
    lines.length === 0 || lines[0].kind !== LineKind.Open || !allowInteractions
      ? container.plain
      : container.nested;

  return (
    <UiOptions
      isInteractive={allowInteractions}
      showDataTypes={showDataTypes}
      showObjectSize={showObjectSize}
      toggle={toggle}
    >
      <div className={clsx(containerClassName, className)}>
        {lines.map((line) => {
          const isCollapsed = line.kind === LineKind.Open && collapsedKeys.has(line.path);

          return <UiLine key={line.path} isCollapsed={isCollapsed} line={line} />;
        })}
      </div>
    </UiOptions>
  );
};
