import { useMemo } from 'react';

import { getTrackIds } from '@tabula/track-id';

type TrackIds<Ids extends Record<string, string | false | null | undefined>> = {
  [Key in keyof Ids]: string | undefined;
};

export function useTrackIds<Ids extends Record<string, string | false | null | undefined>>(
  scope: string | null | undefined,
  ids: Ids,
): TrackIds<Ids> {
  return useMemo(() => getTrackIds<Ids>(scope, ids), [scope, ids]);
}
