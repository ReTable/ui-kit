import { FC } from 'react';

import { clsx } from 'clsx';

import { root } from './Options.css';

import { Option } from '../Option';
import { useOptions } from '../OptionsProvider';

type Props = {
  className?: string;
};

export const Options: FC<Props> = ({ className }) => {
  const { onToggleDataTypes, onToggleObjectSize, showDataTypes, showObjectSize } = useOptions();

  if (onToggleDataTypes == null && onToggleObjectSize == null) {
    return null;
  }

  return (
    <div className={clsx(root, className)}>
      {onToggleDataTypes && (
        <Option onChange={onToggleDataTypes} value={showDataTypes}>
          Show types
        </Option>
      )}
      {onToggleObjectSize && (
        <Option onChange={onToggleObjectSize} value={showObjectSize}>
          Show sizes
        </Option>
      )}
    </div>
  );
};
