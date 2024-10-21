import { RefObject, useCallback, useRef } from 'react';

import { useFlag } from '@tabula/use-flag';

import { DropdownController } from '../../types';

type Result = [
  RefObject<DropdownController>,
  {
    onShowDropdown: () => void;
    onHideDropdown: () => void;

    onGoNext: () => void;
    onGoPrevious: () => void;
    onSelectCurrent: () => void;
  },
];

export function useDropdown(): Result {
  const dropdownRef = useRef<DropdownController>(null);

  const [, { on: onShowDropdown, off: onHideDropdown }] = useFlag(true);

  const handleGoNext = useCallback(() => {
    dropdownRef.current?.goToNext();
  }, []);

  const handleGoPrevious = useCallback(() => {
    dropdownRef.current?.goToPrevious();
  }, []);

  const handleSelect = useCallback(() => {
    dropdownRef.current?.selectCurrent();
  }, []);

  return [
    dropdownRef,
    {
      onShowDropdown,
      onHideDropdown,

      onGoNext: handleGoNext,
      onGoPrevious: handleGoPrevious,
      onSelectCurrent: handleSelect,
    },
  ];
}
