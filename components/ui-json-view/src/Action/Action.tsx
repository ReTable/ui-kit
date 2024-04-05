import { FC } from 'react';

import { clsx } from 'clsx/lite';

import { useUiTrackId } from '@tabula/ui-analytics';

import { root } from './Action.css';

import { useOptions } from '../OptionsProvider';
import { ActionFn } from '../types';

type Props = {
  action: ActionFn;
  children: string;
  className?: string;
  jsonPath: string;
  trackId?: string;
};

export const Action: FC<Props> = ({ action, className, children, jsonPath, trackId }) => {
  const { onAction } = useOptions();

  const actualTrackId = useUiTrackId(trackId ?? false);

  const handleClick = () => {
    onAction(jsonPath, action);
  };

  return (
    <button
      className={clsx(root, className)}
      data-track-id={actualTrackId}
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
};
