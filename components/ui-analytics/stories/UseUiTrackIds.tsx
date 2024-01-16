import { ReactNode } from 'react';

import { useUiTrackIds } from '~';

export function UseUiTrackIds(): ReactNode {
  const trackIds = useUiTrackIds({
    button: 'awesome-button',
    label: 'awesome-label',
  });

  return (
    <div>
      <div>Multiple Ids:</div>
      <ul>
        <li>button: {trackIds.button}</li>
        <li>button: {trackIds.label}</li>
      </ul>
    </div>
  );
}
