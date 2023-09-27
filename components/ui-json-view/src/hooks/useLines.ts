import { useMemo } from 'react';

import { Line, toLines } from '../lines';

export function useLines(source: string): Line[] {
  return useMemo(() => toLines(source), [source]);
}
