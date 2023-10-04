import { FC } from 'react';

import { UiAction } from './UiAction';
import { UiCopy } from './UiCopy';
import { useOptions } from './UiOptionsProvider';
import { QueryFn } from './types';

type Props = {
  className?: string;
  jsonPath: string;
};

function jsonPathToClipboard(jsonPath: string) {
  return jsonPath;
}

function valueToClipboard(jsonPath: string, query: QueryFn): string {
  const value = query(jsonPath);

  return JSON.stringify(value, null, 4);
}

export const UiActions: FC<Props> = ({ className, jsonPath }) => {
  const { actions, isInteractive } = useOptions();

  if (!isInteractive) {
    return null;
  }

  const controls = Object.entries(actions).map(([name, action]) => (
    <UiAction className={className} action={action} key={name} jsonPath={jsonPath}>
      {name}
    </UiAction>
  ));

  return (
    <>
      <UiCopy
        className={className}
        defaultLabel="Copy"
        jsonPath={jsonPath}
        successLabel="Copied!"
        toClipboard={valueToClipboard}
      />
      <UiCopy
        className={className}
        defaultLabel="Copy JSONPath"
        jsonPath={jsonPath}
        successLabel="Copied!"
        toClipboard={jsonPathToClipboard}
      />
      {controls}
    </>
  );
};
