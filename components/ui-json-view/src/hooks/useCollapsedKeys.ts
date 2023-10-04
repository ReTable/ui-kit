import { useCallback, useEffect, useState } from 'react';

import { CollapsedKeys, Line, LineKind, OnToggleFn } from '../types';

// region Registry

class Registry implements CollapsedKeys {
  public constructor(private readonly keys: Set<string> = new Set()) {}

  public get isEmpty(): boolean {
    return this.keys.size === 0;
  }

  public has(key: string): boolean {
    return this.keys.has(key);
  }

  public toggle(key: string): Registry {
    if (this.keys.has(key)) {
      this.keys.delete(key);
    } else {
      this.keys.add(key);
    }

    return new Registry(this.keys);
  }
}

// endregion

// region Init

function initCollapsedKeys(lines: Line[], collapsed: boolean | number): Registry {
  const keys = new Set<string>();

  if (collapsed !== false) {
    const minLevel = collapsed === true ? 0 : collapsed;

    for (const line of lines) {
      if (line.kind === LineKind.Open && line.level >= minLevel) {
        keys.add(line.path);
      }
    }
  }

  return new Registry(keys);
}

// endregion

// region Hook

type Result = [CollapsedKeys, OnToggleFn];

export function useCollapsedKeys(lines: Line[], collapsed: boolean | number = false): Result {
  const [keys, setKeys] = useState(() => initCollapsedKeys(lines, collapsed));

  useEffect(() => {
    setKeys(initCollapsedKeys(lines, collapsed));
  }, [lines, collapsed]);

  const onToggle = useCallback<OnToggleFn>((key: string) => {
    setKeys((current) => current.toggle(key));
  }, []);

  return [keys, onToggle];
}

// endregion
