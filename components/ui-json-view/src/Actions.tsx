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

  const controls = Object.entries(actions).map(([name, action]) => {
    const [actionFn, trackId] =
      typeof action === 'function' ? [action, undefined] : [action.action, action.trackId];

    return (
      <Action
        className={className}
        action={actionFn}
        key={name}
        jsonPath={jsonPath}
        trackId={trackId}
      >
        {name}
      </Action>
    );
  });

  return (
    <>
      <Copy
        className={className}
        defaultLabel="Copy"
        jsonPath={jsonPath}
        successLabel="Copied!"
        toClipboard={valueToClipboard}
        trackId="copy-json"
      />
      <Copy
        className={className}
        defaultLabel="Copy JSONPath"
        jsonPath={jsonPath}
        successLabel="Copied!"
        toClipboard={jsonPathToClipboard}
        trackId="copy-json-path"
      />
      {controls}
    </>
  );
};
