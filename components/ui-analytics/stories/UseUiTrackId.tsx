import { ReactNode } from 'react';

import { useUiTrackId } from '~';

export function UseUiTrackId(): ReactNode {
  const trackId = useUiTrackId();

  return <div>Single Id: {trackId}</div>;
}
