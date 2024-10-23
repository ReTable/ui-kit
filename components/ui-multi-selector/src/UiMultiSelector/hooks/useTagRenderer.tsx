import { useCallback } from 'react';

import { UiTag } from '@tabula/ui-tag';

import { Size, TagRenderer, UpdateHandler, Variant } from '../../types';

type Options = {
  isDisabled?: boolean;
  onUpdate: UpdateHandler;
  size: Size;
  variant: Variant;
};

export function useTagRenderer({ isDisabled, onUpdate, size, variant }: Options): TagRenderer {
  return useCallback<TagRenderer>(
    (className, option) => {
      const { icon, label, value } = typeof option === 'string' ? { value: option } : option;

      const handleRemove = () => {
        onUpdate('remove', [value]);
      };

      return (
        <UiTag
          className={className}
          icon={icon}
          isDisabled={isDisabled}
          key={typeof option === 'string' ? option : option.value}
          onRemove={handleRemove}
          removeTabIndex={-1}
          size={size}
          variant={variant}
        >
          {label ?? value}
        </UiTag>
      );
    },
    [onUpdate, isDisabled, size, variant],
  );
}
