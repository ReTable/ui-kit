import { useContext, useMemo } from 'react';

import { Context } from './Context';

export function useUiTrackId(id?: string | false | null): string | undefined {
  const trackId = useContext(Context);

  return useMemo(() => {
    if (trackId == null || trackId === '') {
      return;
    }

    if (id === false || id === '') {
      return;
    }

    if (id == null) {
      return trackId;
    }

    return `${trackId}--${id}`;
  }, [trackId, id]);
}
