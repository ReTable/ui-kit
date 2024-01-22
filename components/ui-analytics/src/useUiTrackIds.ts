import { useMemo } from 'react';

import { useUiTrackId } from './useUiTrackId';

type TrackIds<Ids extends Record<string, string | false | null | undefined>> = {
  [Key in keyof Ids]: string | undefined;
};

export function useUiTrackIds<Ids extends Record<string, string | false | null | undefined>>(
  ids: Ids,
): TrackIds<Ids> {
  const trackId = useUiTrackId();

  return useMemo(() => {
    const result: Record<string, string | null> = {};

    for (const [name, id] of Object.entries(ids)) {
      if (trackId == null || trackId === '') {
        continue;
      }

      if (!id || id === '') {
        continue;
      }

      result[name] = `${trackId}--${id}`;
    }

    return result as TrackIds<Ids>;
  }, [trackId, ids]);
}
