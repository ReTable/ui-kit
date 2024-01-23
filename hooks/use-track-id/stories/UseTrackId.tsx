import { FC } from 'react';

import { useTrackId } from '~';

type Props = {
  scope?: string;
};

export const UseTrackId: FC<Props> = ({ scope }) => {
  const isUndefined = useTrackId(scope);
  const isNull = useTrackId(scope, null);
  const isFalse = useTrackId(scope, false);
  const isEmpty = useTrackId(scope, '');
  const isString = useTrackId(scope, 'child');

  return (
    <div>
      <div>
        Scope: {JSON.stringify(scope)}, Id: undefined; Output: {JSON.stringify(isUndefined)}
      </div>
      <div>
        Scope: {JSON.stringify(scope)}, Id: null; Output: {JSON.stringify(isNull)}
      </div>
      <div>
        Scope: {JSON.stringify(scope)}, Id: false; Output: {JSON.stringify(isFalse)}
      </div>
      <div>
        Scope: {JSON.stringify(scope)}, Id: &quot;&quot;; Output: {JSON.stringify(isEmpty)}
      </div>
      <div>
        Scope: {JSON.stringify(scope)}, Id: &quot;child&quot;; Output: {JSON.stringify(isString)}
      </div>
    </div>
  );
};
