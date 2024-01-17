import { ReactNode } from 'react';

type Props = {
  columns: string[];
  data: string[][];
};

/* eslint-disable react/no-array-index-key */
export function Table({ columns, data }: Props): ReactNode {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((it, idx) => (
            <td key={idx}>{it}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((it, idx) => (
              <td key={idx}>
                <pre>
                  <code>{JSON.stringify(it, null, 2)}</code>
                </pre>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
/* eslint-enable react/no-array-index-key */
