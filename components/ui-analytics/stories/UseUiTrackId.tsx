import { ReactNode } from 'react';

import { useUiTrackId } from '~';

type Props = {
  id?: string;
};

export function UseUiTrackId({ id }: Props): ReactNode {
  const trackId = useUiTrackId(id);

  return <div>Single Id: {trackId}</div>;
}
