import { ReactNode } from 'react';

import { useUiTrackId } from '~';

export function UseUiTrackId(): ReactNode {
  const isUndefined = useUiTrackId();
  const isNull = useUiTrackId(null);
  const isFalse = useUiTrackId(false);
  const isEmpty = useUiTrackId('');
  const isString = useUiTrackId('child');

  return (
    <div>
      <div>Input: undefined; Output: {JSON.stringify(isUndefined)}</div>
      <div>Input: null; Output: {JSON.stringify(isNull)}</div>
      <div>Input: false; Output: {JSON.stringify(isFalse)}</div>
      <div>Input: &quot;&quot;; Output: {JSON.stringify(isEmpty)}</div>
      <div>Input: &quot;child&quot;; Output: {JSON.stringify(isString)}</div>
    </div>
  );
}
