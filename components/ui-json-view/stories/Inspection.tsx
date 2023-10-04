import { FC } from 'react';

import { clsx } from 'clsx';

import { close, content, root } from './Inspection.css';

type Props = {
  className?: string;
  jsonPath: string;
  onClose: () => void;
  value: string;
};

export const Inspection: FC<Props> = ({ className, jsonPath, onClose, value }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div className={clsx(className, root)}>
      <div className={content}>
        <pre>JSONPath: {jsonPath}</pre>
        <pre>{value}</pre>
      </div>
      <button className={close} onClick={handleClick} type="button">
        Close
      </button>
    </div>
  );
};
