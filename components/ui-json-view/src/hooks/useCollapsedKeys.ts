import { useCallback, useState } from 'react';

import { Line, isOpenLine } from '../lines';
import { CollapsedKeys, ToggleFn } from '../types';

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
      if (isOpenLine(line) && line.level >= minLevel) {
        keys.add(line.key);
      }
    }
  }

  return new Registry(keys);
}

// endregion

// region Hook

type Result = [CollapsedKeys, ToggleFn];

export function useCollapsedKeys(lines: Line[], collapsed: boolean | number): Result {
  const [keys, setKeys] = useState(() => initCollapsedKeys(lines, collapsed));

  const toggle = useCallback<ToggleFn>((key: string) => {
    setKeys((current) => current.toggle(key));
  }, []);

  return [keys, toggle];
}

// endregion
