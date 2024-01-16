import { ReactNode } from 'react';

import { useUiTrackIds } from '~';

export function UseUiTrackIds(): ReactNode {
  const trackIds = useUiTrackIds({
    emptyId: '',
    buttonId: 'button',
    labelId: 'label',
  });

  return (
    <div>
      <div>Multiple Ids:</div>
      <ul>
        <li>emptyId: {trackIds.emptyId}</li>
        <li>buttonId: {trackIds.buttonId}</li>
        <li>labelId: {trackIds.labelId}</li>
      </ul>
    </div>
  );
}
