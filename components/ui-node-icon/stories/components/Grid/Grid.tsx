import { ComponentType, ReactNode } from 'react';

import * as styles from './Grid.css';

type IconProps = {
  className?: string;
  isDisabled?: boolean;
};

type Props = {
  icons: Record<string, ComponentType<IconProps>>;

  currentColor?: string;
  search?: string;
  isDisabled?: boolean;
  isParentDisabled?: boolean;
};

export function Grid({
  icons,
  currentColor,
  isDisabled,
  isParentDisabled,
  search = '',
}: Props): ReactNode {
  const items = Object.entries(icons)
    .filter(([iconName]) => iconName.toLowerCase().includes(search?.toLowerCase()))
    .map(([iconName, Icon]) => (
      <button className={styles.item} disabled={isParentDisabled} key={iconName} type="button">
        <Icon className={styles.icon} isDisabled={isDisabled} />
        {iconName}
      </button>
    ));

  return (
    <div className={styles.root} style={{ color: currentColor }}>
      {items}
    </div>
  );
}

// export const Icons: FC<Args> = ({ isDisabled, parentIsDisabled, search = '' }) => {
//   const icons = Object.entries(UiNodeMIcons)
//     .filter(([iconName]) => iconName.includes(search))
//     .map(([iconName, Icon]) => (
//       <button className={iconContainer} disabled={parentIsDisabled} key={iconName} type="button">
//         <Icon className={icon} isDisabled={isDisabled} />
//         {iconName}
//       </button>
//     ));
//
//   return <div className={root}>{icons}</div>;
// };
