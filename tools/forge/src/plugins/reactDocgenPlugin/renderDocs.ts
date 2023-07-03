import { ComponentDoc } from 'react-docgen-typescript';

export function renderDocs(docs: ComponentDoc[]): string {
  if (docs.length === 0) {
    return '';
  }

  return docs
    .map((doc) => `${doc.displayName}.__docgenInfo = ${JSON.stringify(doc, null, 2)};`)
    .join('\n');
}
