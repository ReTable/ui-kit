import { useMemo } from 'react';

import { useUiTrackId } from './useUiTrackId';

type TrackIds<Ids extends Record<string, string | null | false>> = {
  [Key in keyof Ids]: string | null;
};

export function useUiTrackIds<Ids extends Record<string, string | null | false>>(
  ids: Ids,
): TrackIds<Ids> {
  const trackId = useUiTrackId();

  return useMemo(() => {
    const result: Record<string, string | null> = {};

    for (const [name, id] of Object.entries(ids)) {
      if (trackId == null || trackId === '') {
        result[name] = null;

        continue;
      }

      if (!id || id === '') {
        result[name] = null;

        continue;
      }

      result[name] = `${trackId}--${id}`;
    }

    return result as TrackIds<Ids>;
  }, [trackId, ids]);
}
