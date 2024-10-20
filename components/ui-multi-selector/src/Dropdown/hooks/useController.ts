import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

import { DropdownController } from '../../types';

export function useController(controllerRef: Ref<DropdownController>): RefObject<HTMLDivElement> {
  const rootRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(controllerRef, () => ({
    goToPrevious: () => {
      console.log('go to previous');
    },
    goToNext: () => {
      console.log('go to next');
    },

    selectCurrent: () => {
      console.log('select current');
    },
  }));

  return rootRef;
}
