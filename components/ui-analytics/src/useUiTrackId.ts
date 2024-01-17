import { useContext, useMemo } from 'react';

import { Context } from './Context';

export function useUiTrackId(id?: string | false | null): string | null {
  const trackId = useContext(Context);

  return useMemo(() => {
    if (trackId == null || trackId === '') {
      return null;
    }

    if (id === false || id === '') {
      return null;
    }

    if (id == null) {
      return trackId;
    }

    return `${trackId}--${id}`;
  }, [trackId, id]);
}
