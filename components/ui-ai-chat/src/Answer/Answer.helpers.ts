import DOMPurify from 'dompurify';
import { xxHash32 } from 'js-xxhash';
import { Marked, Tokens } from 'marked';

import * as styles from './Answer.css';

import { TableAction, TableData } from '../types';

// region Actions

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    UI_AI_CHAT_TABLE_ACTIONS: Map<string, () => void>;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
window.UI_AI_CHAT_TABLE_ACTIONS = window.UI_AI_CHAT_TABLE_ACTIONS || new Map();

function hashOf(table: TableData): string {
  return xxHash32(JSON.stringify(table)).toString(16);
}

function registerActions(id: number, table: TableData, actions: TableAction[]): string[][] {
  const prefix = `${id}__${hashOf(table)}`;

  const vtable: string[][] = [];

  for (const [idx, { label, action }] of actions.entries()) {
    const key = `${prefix}__${idx}`;

    const call = `window.UI_AI_CHAT_TABLE_ACTIONS.get('${key}')?.()`;

    window.UI_AI_CHAT_TABLE_ACTIONS.set(key, () => {
      action(table);
    });

    vtable.push([label, call]);
  }

  return vtable;
}

export function unregisterActions(id: number): void {
  for (const [key] of window.UI_AI_CHAT_TABLE_ACTIONS.entries()) {
    if (!key.startsWith(`${id}__`)) {
      return;
    }

    window.UI_AI_CHAT_TABLE_ACTIONS.delete(key);
  }
}

function renderActions(id: number, table: TableData, actions: TableAction[]): string {
  const vtable = registerActions(id, table, actions);

  const items = vtable
    .map(
      ([label, call]) => `
        <button class="${styles.tableActionButton}" onclick="${call}" type="button">${label}</button>
    `,
    )
    .join('');

  return `<div class="${styles.tableActions}">${items}</div>`;
}

// endregion Actions

// region Table

function renderHead(data: string[]): string {
  const cells = data.map((it) => `<th>${it}</th>`).join('');

  return `<thead><tr>${cells}</tr></thead>`;
}

function renderBody(data: string[][]): string {
  const rows = data
    .map((row) => {
      const cells = row.map((it) => `<td>${it}</td>`).join('');

      return `<tr>${cells}</tr>`;
    })
    .join('');

  return `<tbody>${rows}</tbody>`;
}

function renderTable(table: TableData): string {
  return `
    <div class="${styles.tableScroll}">
      <div class="${styles.tableContainer}">
        <table>
          ${renderHead(table.header)}
          ${renderBody(table.rows)}
        </table>
      </div>
    </div>
  `;
}

// endregion Table

// region Render

export function render(id: number, input: string, tableActions: TableAction[]): string {
  const parser = new Marked({
    async: false,

    renderer: {
      table({ header, rows }: Tokens.Table): string {
        const table: TableData = {
          header: header.map((h) => h.text),
          rows: rows.map((row) => row.map((v) => v.text)),
        };

        return `${renderTable(table)}${renderActions(id, table, tableActions)}`;
      },
    },
  });

  const output = parser.parse(input, { async: false });

  return DOMPurify.sanitize(output);
}

// endregion Render

// region DOMPurify

const allowedOnClickContent = /^window\.UI_AI_CHAT_TABLE_ACTIONS\.get\('\d+__\w+__\d+'\)\?\.\(\)$/;

DOMPurify.addHook('uponSanitizeAttribute', (_, data) => {
  if (data.attrName === 'onclick' && allowedOnClickContent.test(data.attrValue)) {
    data.forceKeepAttr = true;
  }
});

// endregion DOMPurify
