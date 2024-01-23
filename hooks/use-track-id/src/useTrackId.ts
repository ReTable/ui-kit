import { useMemo } from 'react';

import { getTrackId } from '@tabula/track-id';

export function useTrackId(
  scope?: string | null | undefined,
  id?: string | false | null,
): string | undefined {
  return useMemo(() => getTrackId(scope, id), [scope, id]);
}
