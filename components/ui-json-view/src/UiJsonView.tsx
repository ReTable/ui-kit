import { FC } from 'react';

import { clsx } from 'clsx';

import { container } from './style.css';

import { UiOptions } from './UiOptions';
import { UiStaticView } from './UiStaticView';
import { UiVirtualView } from './UiVirtualView';
import { useCollapsedKeys, useCollapsedLines, useLineRenderer, useLines } from './hooks';
import { JsonViewOptions, LineKind } from './types';

export type Props = Partial<JsonViewOptions> & {
  className?: string;
  collapsed?: boolean | number;
  isVirtual?: boolean;
  limit?: number;
  source: string;
};

export const UiJsonView: FC<Props> = ({
  className = '',
  collapsed,
  isInteractive,
  isVirtual,
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
  // Step 4: Detect container class for right paddings.
  const containerClassName =
    lines.length === 0 || lines[0].kind !== LineKind.Open || !allowInteractions
      ? container.plain
      : container.nested;
  // Step 5: Detect view component based on virtualization option.
  const View = isVirtual ? UiVirtualView : UiStaticView;
  // Step 6: Create a line renderer.
  const lineRenderer = useLineRenderer(lines, collapsedKeys);

  return (
    <UiOptions
      isInteractive={allowInteractions}
      showDataTypes={showDataTypes}
      showObjectSize={showObjectSize}
      toggle={toggle}
    >
      <View
        className={clsx(containerClassName, className)}
        count={lines.length}
        lineRenderer={lineRenderer}
      />
    </UiOptions>
  );
};
