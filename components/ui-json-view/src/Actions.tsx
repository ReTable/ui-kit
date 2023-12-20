import { FC } from 'react';

import { Action } from './Action';
import { Copy } from './Copy';
import { useOptions } from './OptionsProvider';
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

export const Actions: FC<Props> = ({ className, jsonPath }) => {
  const { actions, isInteractive } = useOptions();

  if (!isInteractive) {
    return null;
  }

  const controls = Object.entries(actions).map(([name, action]) => (
    <Action className={className} action={action} key={name} jsonPath={jsonPath}>
      {name}
    </Action>
  ));

  return (
    <>
      <Copy
        className={className}
        defaultLabel="Copy"
        jsonPath={jsonPath}
        successLabel="Copied!"
        toClipboard={valueToClipboard}
      />
      <Copy
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
