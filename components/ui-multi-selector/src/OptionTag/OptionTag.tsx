import { ReactNode, useCallback } from 'react';

import { UiTag } from '@tabula/ui-tag';

import { Option, Size, Variant } from '../types';

type Props = {
  isDisabled?: boolean;
  onRemove: (id: string) => void;
  option: Option;
  size: Size;
  variant: Variant;
};

export function OptionTag({ isDisabled, onRemove, option, size, variant }: Props): ReactNode {
  const handleRemove = useCallback(() => {
    if (isDisabled) {
      return;
    }

    onRemove(option.id);
  }, [option, isDisabled, onRemove]);

  return (
    <UiTag
      icon={option.icon}
      isDisabled={isDisabled}
      onRemove={handleRemove}
      size={size}
      variant={variant}
    >
      {option.label}
    </UiTag>
  );
}
