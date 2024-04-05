import { FC, MutableRefObject, useRef, useState } from 'react';

import { clsx } from 'clsx/lite';

import { copied } from './Copy.css';

import { Action } from '../Action';
import { ActionFn, QueryFn } from '../types';

type Props = {
  className?: string;
  defaultLabel: string;
  jsonPath: string;
  successLabel: string;
  toClipboard: (jsonPath: string, query: QueryFn) => string;
  trackId?: string;
};

const delay = 1000;

export const Copy: FC<Props> = ({
  className,
  defaultLabel,
  jsonPath,
  successLabel,
  toClipboard,
  trackId,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const timerRef: MutableRefObject<number | null> = useRef(null);

  const action: ActionFn = (_, query) => {
    navigator.clipboard
      .writeText(toClipboard(jsonPath, query))
      .then(() => {
        setIsCopied(true);

        if (timerRef.current != null) {
          window.clearTimeout(timerRef.current);
        }

        timerRef.current = window.setTimeout(() => {
          setIsCopied(false);
        }, delay);
      })
      .catch(() => {
        setIsCopied(false);
      });
  };

  return (
    <Action
      className={clsx(className, isCopied && copied)}
      action={action}
      jsonPath={jsonPath}
      trackId={trackId}
    >
      {isCopied ? successLabel : defaultLabel}
    </Action>
  );
};
