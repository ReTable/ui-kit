import { ReactNode } from 'react';

import { useUiTrackIds } from '~';

export function UseUiTrackIds(): ReactNode {
  const trackIds = useUiTrackIds({
    isUndefined: undefined,
    isNull: null,
    isFalse: false,
    isEmpty: '',
    isString: 'child',
  });

  return (
    <div>
      <div>Multiple Ids:</div>
      <ul>
        <li>isUndefined: {JSON.stringify(trackIds.isUndefined)}</li>
        <li>isNull: {JSON.stringify(trackIds.isNull)}</li>
        <li>isFalse: {JSON.stringify(trackIds.isFalse)}</li>
        <li>isEmpty: {JSON.stringify(trackIds.isEmpty)}</li>
        <li>isString: {JSON.stringify(trackIds.isString)}</li>
      </ul>
    </div>
  );
}
