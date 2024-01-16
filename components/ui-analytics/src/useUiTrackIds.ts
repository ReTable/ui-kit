import { useMemo } from 'react';

import { idFrom } from './idFrom';
import { useUiTrackId } from './useUiTrackId';

type TrackIds<Ids extends Record<string, string>> = {
  [Key in keyof Ids]: string | null;
};

export function useUiTrackIds<Ids extends Record<string, string>>(ids: Ids): TrackIds<Ids> {
  const trackId = useUiTrackId();

  return useMemo(() => {
    const result: Record<string, string | null> = {};

    for (const [name, id] of Object.entries(ids)) {
      result[name] = idFrom(trackId, id);
    }

    return result as TrackIds<Ids>;
  }, [trackId, ids]);
}
