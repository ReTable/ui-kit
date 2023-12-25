import { FC } from 'react';

import { clsx } from 'clsx';

import { variants } from './UiJsonView.css';

import { OptionsProvider } from '../OptionsProvider';
import { StaticView } from '../StaticView';
import { VirtualView } from '../VirtualView';
import { JsonViewOptions, LineKind } from '../types';

import { useActionHandler, useCollapsedKeys, useCollapsedLines, useLines, useValue } from './hooks';

export type Props = Partial<JsonViewOptions> & {
  className?: string;
  /**
   * Allows to collapse arrays and objects after the given depth.
   *
   * If the `true` value is given, then all arrays and objects are collapsed.
   *
   * If the number value is given, then arrays and objects after the given level are collapsed.
   *
   * **NOTE**: requires `isInteractive` option is enabled.
   */
  collapsed?: boolean | number;
  /**
   * Enables render with virtualization.
   */
  isVirtual?: boolean;
  /**
   * Allow to render limited number of lines.
   *
   * This option disables expand/collapse controls and line actions.
   */
  limit?: number;
  /**
   * JSON value in string representation.
   */
  source: string;
};

export const UiJsonView: FC<Props> = ({
  actions,
  className = '',
  collapsed,
  isInteractive,
  isVirtual,
  limit,
  onToggleDataTypes,
  onToggleObjectSize,
  shortStringAfterLength,
  showDataTypes,
  showObjectSize,
  source,
}) => {
  const [allowInteractions, maxNumberOfLines] =
    limit != null && limit > 0 ? [false, limit] : [isInteractive, Number.POSITIVE_INFINITY];

  // Step 1: Try to parse source string to the JSON value.
  const [value, isValid] = useValue(source);
  // Step 2: Map JSON value to the lines for rendering pipeline.
  const allLines = useLines(value, isValid, maxNumberOfLines);
  // Step 3: Initiate collapsed keys service.
  const [collapsedKeys, onToggle] = useCollapsedKeys(
    allLines,
    allowInteractions ? collapsed : false,
  );
  // Step 4: Filter collapsed lines.
  const lines = useCollapsedLines(allLines, collapsedKeys);
  // Step 5: Detect container class for right paddings.
  const containerClassName =
    lines.length === 0 || lines[0].kind !== LineKind.Open || !allowInteractions
      ? variants.static
      : variants.interactive;
  // Step 6: Create an action handler.
  const onAction = useActionHandler(value, isValid);
  // Step 7: Detect view type based on `isVirtual` option.
  const View = isVirtual ? VirtualView : StaticView;

  return (
    <OptionsProvider
      actions={actions}
      isInteractive={allowInteractions}
      onAction={onAction}
      onToggle={onToggle}
      onToggleDataTypes={onToggleDataTypes}
      onToggleObjectSize={onToggleObjectSize}
      shortStringAfterLength={shortStringAfterLength}
      showDataTypes={showDataTypes}
      showObjectSize={showObjectSize}
    >
      <View className={clsx(containerClassName, className)} lines={lines} />
    </OptionsProvider>
  );
};

if (import.meta.env.DEV) {
  UiJsonView.displayName = 'ui-json-view(UiJsonView)';
}
