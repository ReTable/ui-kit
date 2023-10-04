import { FC, useMemo } from 'react';

import { clsx } from 'clsx';

import { UiButton24 } from '@tabula/ui-button';

import { root } from './UiControls.css';

import { useOptions } from './UiOptions';

type Props = {
  className?: string;
};

export const UiControls: FC<Props> = ({ className }) => {
  const { onToggleDataTypes, onToggleObjectSize, showDataTypes, showObjectSize } = useOptions();

  const handleToggleDataTypes = useMemo(() => {
    if (onToggleDataTypes == null) {
      return null;
    }

    return () => {
      onToggleDataTypes(!showDataTypes);
    };
  }, [onToggleDataTypes, showDataTypes]);

  const handleToggleObjectSize = useMemo(() => {
    if (onToggleObjectSize == null) {
      return null;
    }

    return () => {
      onToggleObjectSize(!showObjectSize);
    };
  }, [onToggleObjectSize, showObjectSize]);

  if (handleToggleDataTypes == null && handleToggleObjectSize == null) {
    return null;
  }

  return (
    <div className={clsx(root, className)}>
      {handleToggleDataTypes && (
        <UiButton24 onClick={handleToggleDataTypes} variant="cancel">
          {showDataTypes ? 'Hide types' : 'Show types'}
        </UiButton24>
      )}
      {handleToggleObjectSize && (
        <UiButton24 onClick={handleToggleObjectSize} variant="cancel">
          {showObjectSize ? 'Hide sizes' : 'Show sizes'}
        </UiButton24>
      )}
    </div>
  );
};
