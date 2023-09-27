import { CSSProperties } from 'react';

const cache = new Map<number, CSSProperties>();

export function useLevel(level: number): CSSProperties {
  let style = cache.get(level);

  if (style == null) {
    style = {
      paddingLeft: `${level * 16}px`,
    };

    cache.set(level, style);
  }

  return style;
}
