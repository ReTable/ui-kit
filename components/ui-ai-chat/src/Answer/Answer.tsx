import { ReactNode, useEffect, useMemo } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Answer.css';

import { Request, TableAction } from '../types';

import { render, unregisterActions } from './Answer.helpers';

type Props = {
  className?: string;
  pendingPlaceholder?: string;
  request: Request;
  tableActions: TableAction[];
};

export function Answer({
  className,
  pendingPlaceholder = 'Analyzing...',
  request,
  tableActions,
}: Props): ReactNode {
  const content = useMemo(() => {
    if (request.id == null) {
      return null;
    }

    return render(request.id, request.answer, tableActions);
  }, [request.id, request.answer, tableActions]);

  useEffect(
    () => () => {
      if (request.id == null) {
        return;
      }

      unregisterActions(request.id);
    },
    [request.id],
  );

  if (content == null) {
    return <div className={clsx(styles.placeholder, className)}>{pendingPlaceholder}</div>;
  }

  return (
    // eslint-disable-next-line react/no-danger
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
}

if (import.meta.env.DEV) {
  Answer.displayName = 'ui-ai-chat(Answer)';
}
