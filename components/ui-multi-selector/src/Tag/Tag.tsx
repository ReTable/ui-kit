import { ReactNode, useCallback } from 'react';

import { UiTag } from '@tabula/ui-tag';

import { IconComponent, RemoveHandler, Size, Variant } from '../types';

type Props = {
  className?: string;
  icon?: IconComponent;
  isDisabled?: boolean;
  label?: string;
  onRemove: RemoveHandler;
  size: Size;
  value: string;
  variant: Variant;
};

export function Tag({
  className,
  icon,
  isDisabled,
  label,
  onRemove,
  size,
  value,
  variant,
}: Props): ReactNode {
  const handleRemove = useCallback(() => {
    onRemove(value);
  }, [value, onRemove]);

  return (
    <UiTag
      className={className}
      icon={icon}
      isDisabled={isDisabled}
      onRemove={handleRemove}
      size={size}
      variant={variant}
    >
      {label ?? value}
    </UiTag>
  );
}
