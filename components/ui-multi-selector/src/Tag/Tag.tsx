import { ReactNode, useCallback } from 'react';

import { UiTag } from '@tabula/ui-tag';

import { useContext } from '../Context';
import { IconComponent } from '../types';

type Props = {
  className?: string;
  icon?: IconComponent;
  label?: string;
  value: string;
};

export function Tag({ className, icon, label, value }: Props): ReactNode {
  const { isDisabled, onRemove, size, variant } = useContext();

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
