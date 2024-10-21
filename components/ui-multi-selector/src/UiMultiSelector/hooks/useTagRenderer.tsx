import { useCallback } from 'react';

import { UiTag } from '@tabula/ui-tag';

import { RemoveHandler, Size, TagRenderer, Variant } from '../../types';

type Options = {
  isDisabled?: boolean;
  onRemove: RemoveHandler;
  size: Size;
  variant: Variant;
};

export function useTagRenderer({ isDisabled, onRemove, size, variant }: Options): TagRenderer {
  return useCallback<TagRenderer>(
    (className, option) => {
      const { icon, label, value } = typeof option === 'string' ? { value: option } : option;

      const handleRemove = () => {
        onRemove(value);
      };

      return (
        <UiTag
          className={className}
          icon={icon}
          isDisabled={isDisabled}
          key={typeof option === 'string' ? option : option.value}
          onRemove={handleRemove}
          size={size}
          variant={variant}
        >
          {label ?? value}
        </UiTag>
      );
    },
    [onRemove, isDisabled, size, variant],
  );
}
