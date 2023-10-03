import { FC } from 'react';

import { clsx } from 'clsx';

import { UiButton24 } from '@tabula/ui-button';

import { root } from './UiControls.css';

import { useOptions } from './UiOptions';

type Props = {
  className?: string;
};

export const UiControls: FC<Props> = ({ className }) => {
  const { onToggleDataTypes, onToggleObjectSize, showDataTypes, showObjectSize } = useOptions();

  if (onToggleDataTypes == null && onToggleObjectSize == null) {
    return null;
  }

  return (
    <div className={clsx(root, className)}>
      {onToggleDataTypes && (
        <UiButton24 onClick={onToggleDataTypes} variant="secondary">
          {showDataTypes ? 'Hide types' : 'Show types'}
        </UiButton24>
      )}
      {onToggleObjectSize && (
        <UiButton24 onClick={onToggleObjectSize} variant="secondary">
          {showObjectSize ? 'Hide sizes' : 'Show sizes'}
        </UiButton24>
      )}
    </div>
  );
};
