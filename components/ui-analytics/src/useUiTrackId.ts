import { useContext } from 'react';

import { useTrackId } from '@tabula/use-track-id';

import { Context } from './Context';

export function useUiTrackId(id?: string | false | null): string | undefined {
  const scope = useContext(Context);

  return useTrackId(scope, id);
}
