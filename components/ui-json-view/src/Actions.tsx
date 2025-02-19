import { FC, ReactNode } from 'react';

import { Action } from './Action';
import { Copy } from './Copy';
import { useOptions } from './OptionsProvider';
import { QueryFn, ValueType } from './types';

type Props = {
  className?: string;
  jsonPath: string;
  type: ValueType;
};

function jsonPathToClipboard(jsonPath: string) {
  return jsonPath;
}

function valueToClipboard(jsonPath: string, query: QueryFn): string {
  const value = query(jsonPath);

  return JSON.stringify(value, null, 4);
}

export const Actions: FC<Props> = ({ className, jsonPath, type }) => {
  const { actions, isCopyPathAllowed, isCopyValueAllowed, isInteractive } = useOptions();

  if (!isInteractive) {
    return null;
  }

  const body: ReactNode[] = [];

  if (isCopyValueAllowed) {
    body.push(
      <Copy
        className={className}
        defaultLabel="Copy"
        jsonPath={jsonPath}
        key="copy-value"
        successLabel="Copied!"
        toClipboard={valueToClipboard}
        trackId="copy-json"
      />,
    );
  }

  if (isCopyPathAllowed) {
    body.push(
      <Copy
        className={className}
        defaultLabel="Copy JSONPath"
        jsonPath={jsonPath}
        key="copy-path"
        successLabel="Copied!"
        toClipboard={jsonPathToClipboard}
        trackId="copy-json-path"
      />,
    );
  }

  for (const [name, action] of Object.entries(actions)) {
    if (typeof action === 'function') {
      body.push(
        <Action className={className} action={action} key={name} jsonPath={jsonPath}>
          {name}
        </Action>,
      );
      continue;
    }

    const { action: actionFn, isVisible, trackId } = action;

    if (isVisible != null && !isVisible(jsonPath, type)) {
      continue;
    }

    body.push(
      <Action
        className={className}
        action={actionFn}
        key={name}
        jsonPath={jsonPath}
        trackId={trackId}
      >
        {name}
      </Action>,
    );
  }

  return body;
};
