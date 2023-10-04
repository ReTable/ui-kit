import { FC } from 'react';

import { clsx } from 'clsx';

import { root } from './UiOptions.css';

import { UiOption } from './UiOption';
import { useOptions } from './UiOptionsProvider';

type Props = {
  className?: string;
};

export const UiOptions: FC<Props> = ({ className }) => {
  const { onToggleDataTypes, onToggleObjectSize, showDataTypes, showObjectSize } = useOptions();

  if (onToggleDataTypes == null && onToggleObjectSize == null) {
    return null;
  }

  return (
    <div className={clsx(root, className)}>
      {onToggleDataTypes && (
        <UiOption onChange={onToggleDataTypes} value={showDataTypes}>
          Show types
        </UiOption>
      )}
      {onToggleObjectSize && (
        <UiOption onChange={onToggleObjectSize} value={showObjectSize}>
          Show sizes
        </UiOption>
      )}
    </div>
  );
};
