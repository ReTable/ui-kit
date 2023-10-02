import { FC, MutableRefObject, useRef, useState } from 'react';

import { clsx } from 'clsx';

import { copied } from './UiCopy.css';

import { UiAction } from './UiAction';
import { ActionFn } from './types';

type Props = {
  className?: string;
  jsonPath: string;
};

const delay = 1000;

export const UiCopy: FC<Props> = ({ className, jsonPath }) => {
  const [isCopied, setIsCopied] = useState(false);

  const timerRef: MutableRefObject<number | null> = useRef(null);

  const action: ActionFn = (_, query) => {
    const toCopy = JSON.stringify(query(jsonPath), null, 4);

    navigator.clipboard
      .writeText(toCopy)
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
      {isCopied ? 'Copied!' : 'Copy'}
    </UiAction>
  );
};
