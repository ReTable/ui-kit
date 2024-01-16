import { useContext } from 'react';

import { Context } from './Context';

export function useUiTrackId(): string | null {
  return useContext(Context);
}
