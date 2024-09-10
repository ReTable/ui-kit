import { ReactNode, useEffect, useState } from 'react';

import DOMPurify from 'dompurify';
import { marked } from 'marked';

import { Request, TableAction } from '../types';

import { clearActionsForRequest, createTableRenderer } from './Answer.helpers';

type Props = {
  className?: string;
  request: Request;
  tableActions: TableAction[];
};

export function Answer({ className, request, tableActions }: Props): ReactNode {
  const [sanitizedParsedHtml, setSanitizedParsedHtml] = useState<string>();

  useEffect(() => {
    if (request.id == null) {
      return;
    }

    marked.use({
      extensions: [{ name: 'table', renderer: createTableRenderer(request.id, tableActions) }],
    });

    const parsed = marked.parse(request.answer);
    const sanitized = DOMPurify.sanitize(parsed);

    setSanitizedParsedHtml(sanitized);

    return () => {
      clearActionsForRequest(request.id);
    };
  }, [request, tableActions]);

  if (sanitizedParsedHtml == null) {
    return <div className={className}>...</div>;
  }

  return (
    // eslint-disable-next-line react/no-danger
    <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedParsedHtml }} />
  );
}

if (import.meta.env.DEV) {
  Answer.displayName = 'UiAiChat(Answer)';
}
