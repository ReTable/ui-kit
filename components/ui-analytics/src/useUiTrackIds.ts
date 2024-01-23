import { useTrackIds } from '@tabula/use-track-ids';

import { useUiTrackId } from './useUiTrackId';

type TrackIds<Ids extends Record<string, string | false | null | undefined>> = {
  [Key in keyof Ids]: string | undefined;
};

export function useUiTrackIds<Ids extends Record<string, string | false | null | undefined>>(
  ids: Ids,
): TrackIds<Ids> {
  const scope = useUiTrackId();

  return useTrackIds(scope, ids);
}
