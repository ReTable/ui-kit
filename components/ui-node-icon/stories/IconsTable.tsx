import { ComponentType, FC, ReactNode, useMemo, useState } from 'react';

import { IconProps, UiNodeLIcons, UiNodeMIcons, UiNodeSIcons } from '~';

import { iconsTable, iconsTableItem, switcher } from './styles.css';

// region Types

type Icon = Record<'small' | 'medium' | 'large', ComponentType<IconProps> | undefined>;

type Icons = Map<string, Icon>;

// endregion

// region Icons

const icons: Icons = new Map();

for (const [iconName, Icon] of Object.entries(UiNodeSIcons)) {
  const key = iconName.slice(2, -5);

  icons.set(key, { small: Icon } as Icon);
}

for (const [iconName, Icon] of Object.entries(UiNodeMIcons)) {
  const key = iconName.slice(2, -5);

  const icon = icons.get(key) ?? ({} as Icon);

  icon.medium = Icon;

  icons.set(key, icon);
}

for (const [iconName, Icon] of Object.entries(UiNodeLIcons)) {
  const key = iconName.slice(2, -5);

  const icon = icons.get(key) ?? ({} as Icon);

  icon.large = Icon;

  icons.set(key, icon);
}

// endregion

// region Icons Table

export const IconsTable: FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const rows = useMemo(() => {
    const nodes: ReactNode[] = [];

    const allIcons = [...icons.entries()];

    allIcons.sort(([left], [right]) => left.localeCompare(right));

    for (const [key, icon] of allIcons) {
      const { small: Small, medium: Medium, large: Large } = icon;

      nodes.push(
        <tr key={key}>
          <td>{key}</td>
          <td>
            {Small && (
              <div className={iconsTableItem}>
                <Small isDisabled={isDisabled} />
              </div>
            )}
          </td>
          <td>
            {Medium && (
              <div className={iconsTableItem}>
                <Medium isDisabled={isDisabled} />
              </div>
            )}
          </td>
          <td>
            {Large && (
              <div className={iconsTableItem}>
                <Large isDisabled={isDisabled} />
              </div>
            )}
          </td>
        </tr>,
      );
    }

    return nodes;
  }, [isDisabled]);

  return [
    <label key="switcher" className={switcher}>
      <input
        type="checkbox"
        checked={isDisabled}
        onChange={() => {
          setIsDisabled((prevState) => !prevState);
        }}
      />
      Is disabled
    </label>,
    <table key="table" className={iconsTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Small</th>
          <th>Medium</th>
          <th>Large</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>,
  ];
};

// endregion
