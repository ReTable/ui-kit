import { ReactNode } from 'react';

import * as styles from './Table.css';

import { useTable } from './Table.hooks';
import { IconsMap } from './Table.types';

type Props = {
  small: IconsMap;
  medium: IconsMap;
  large: IconsMap;
};

export function Table({ small, medium, large }: Props): ReactNode {
  const table = useTable(small, medium, large);

  const rows = table.map(([name, { small: SmallIcon, medium: MediumIcon, large: LargeIcon }]) => (
    <tr key={name}>
      <td>{name}</td>
      <td>
        {SmallIcon && (
          <div className={styles.item}>
            <SmallIcon />
          </div>
        )}
      </td>
      <td>
        {MediumIcon && (
          <div className={styles.item}>
            <MediumIcon />
          </div>
        )}
      </td>
      <td>
        {LargeIcon && (
          <div className={styles.item}>
            <LargeIcon />
          </div>
        )}
      </td>
    </tr>
  ));

  return (
    <table className={styles.root}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Small</th>
          <th>Medium</th>
          <th>Large</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
