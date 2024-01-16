import { useMemo } from 'react';

import { useUiTrackId } from './useUiTrackId';

type TrackIds<Ids extends Record<string, string>> = {
  [Key in keyof Ids]: string | null;
};

export function useUiTrackIds<Ids extends Record<string, string>>(ids: Ids): TrackIds<Ids> {
  const trackId = useUiTrackId();

  return useMemo(() => {
    const result: Record<string, string | null> = {};

    for (const [name, value] of Object.entries(ids)) {
      result[name] = trackId == null ? null : `${trackId}--${value}`;
    }

    return result as TrackIds<Ids>;
  }, [trackId, ids]);
}
