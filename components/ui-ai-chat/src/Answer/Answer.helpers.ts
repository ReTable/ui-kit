import DOMPurify from 'dompurify';
import { xxHash32 } from 'js-xxhash';
import { marked } from 'marked';

import * as styles from './Answer.css';

import { TableAction, TableData } from '../types';

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    UI_AI_CHAT_TABLE_ACTIONS_STORAGE: Map<string, () => void>;
  }
}

window.UI_AI_CHAT_TABLE_ACTIONS_STORAGE =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  window.UI_AI_CHAT_TABLE_ACTIONS_STORAGE || new Map<string, () => void>();

function hashTable(table: TableData) {
  const str = JSON.stringify(table);

  return xxHash32(str);
}

function createTableActionButton(requestId: number, table: TableData, action: TableAction): string {
  const key = `${requestId}_${action.label}_${hashTable(table)}`;

  window.UI_AI_CHAT_TABLE_ACTIONS_STORAGE.set(key, () => {
    action.action(table);
  });

  return `
<button
  class="${styles.tableActionButton}"
  onclick="window.UI_AI_CHAT_TABLE_ACTIONS_STORAGE.get('${key}')()"
>
  ${action.label}
</button>`;
}

export function clearActionsForRequest(requestId: number): void {
  for (const [key] of window.UI_AI_CHAT_TABLE_ACTIONS_STORAGE.entries()) {
    if (key.startsWith(`${requestId}_`)) {
      window.UI_AI_CHAT_TABLE_ACTIONS_STORAGE.delete(key);
    }
  }
}

function renderRow(row: string[]) {
  return row.map((value) => `<td class="${styles.rowCell}">${value}</td>`).join('');
}

function renderRows(rows: string[][]) {
  return rows.map((row) => `<tr class="${styles.row}">${renderRow(row)}</tr>`).join('');
}

function renderHeader(header: string[]) {
  return `<th class="${styles.header}">${header.map((h) => `<th class="${styles.headerCell}">${h}</th>`).join('')}</th>`;
}

export function createTableRenderer(
  requestId: number,
  tableActions: TableAction[],
): (token: marked.Tokens.Generic) => string | false {
  return (token: marked.Tokens.Generic) => {
    if (token.type !== 'table') {
      return false;
    }

    const { header, rows } = token as marked.Tokens.Table;

    const data: TableData = {
      header: header.map((h) => h.text),
      rows: rows.map((row) => row.map((v) => v.text)),
    };

    const renderedTable = DOMPurify.sanitize(`
<table class="${styles.table}">
  ${renderHeader(data.header)}
  ${renderRows(data.rows)}
</table>`);

    const actions = tableActions
      .map((action) => createTableActionButton(requestId, data, action))
      .join('\n');

    return `
<div class="${styles.tableContainer}">${renderedTable}</div>
<div class="${styles.tableActions}">${actions}</div>`;
  };
}

const allowedOnClickContent = /^window\.UI_AI_CHAT_TABLE_ACTIONS_STORAGE\.get\('[\w -]+'\)\(\)$/;

DOMPurify.addHook('uponSanitizeAttribute', (_, data) => {
  if (data.attrName === 'onclick' && allowedOnClickContent.test(data.attrValue)) {
    data.forceKeepAttr = true;
  }
});