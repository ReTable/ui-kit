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

    // NOTE: The `marked.parse` could return `Promise<string>` if extension requires `async` operation.
    //
    //       We use the only one extension, which we controlled, and can be sure it's synchronous.
    //
    // FIXME(demiazz): rewrite this piece of code in async style, to avoid type type casting.
    const parsed = marked.parse(request.answer, { async: false }) as string;
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
  Answer.displayName = 'ui-ai-chat(Answer)';
}
