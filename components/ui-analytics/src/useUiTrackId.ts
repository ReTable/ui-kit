import { useContext } from 'react';

import { Context } from './Context';
import { idFrom } from './idFrom';

export function useUiTrackId(id?: string): string | null {
  const trackId = useContext(Context);

  return idFrom(trackId, id);
}
