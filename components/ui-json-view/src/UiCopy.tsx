import { FC, MutableRefObject, useRef, useState } from 'react';

import { clsx } from 'clsx';

import { copied } from './UiCopy.css';

import { UiAction } from './UiAction';
import { ActionFn, QueryFn } from './types';

type Props = {
  className?: string;
  defaultLabel: string;
  jsonPath: string;
  successLabel: string;
  toClipboard: (jsonPath: string, query: QueryFn) => string;
};

const delay = 1000;

export const UiCopy: FC<Props> = ({
  className,
  defaultLabel,
  jsonPath,
  successLabel,
  toClipboard,
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
    <UiAction className={clsx(className, isCopied && copied)} action={action} jsonPath={jsonPath}>
      {isCopied ? successLabel : defaultLabel}
    </UiAction>
  );
};
