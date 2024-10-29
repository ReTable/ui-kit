import { useMemo } from 'react';

import { getTrackId } from '@tabula/track-id';

export function useTrackId(scope?: string | null, id?: string | false | null): string | undefined {
  return useMemo(() => getTrackId(scope, id), [scope, id]);
}
