import { RefObject, useCallback, useRef } from 'react';

import { EndHandler } from 'react-transition-group/Transition';

export function useTransition(): [RefObject<HTMLDivElement>, EndHandler<HTMLDivElement>] {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleTransitionEnd = useCallback<EndHandler<HTMLDivElement>>((done) => {
    if (nodeRef.current == null) {
      return;
    }

    const listener = (event: Event) => {
      done();

      event.target?.removeEventListener('transitionend', listener, false);
    };

    nodeRef.current.addEventListener('transitionend', listener, false);
  }, []);

  return [nodeRef, handleTransitionEnd];
}
