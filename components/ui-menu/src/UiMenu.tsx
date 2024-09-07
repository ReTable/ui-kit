import { ReactNode, useCallback } from 'react';

import clsx from 'clsx';
import { RightChevron12Icon } from 'src/components/icons';

import styles from './Menu.module.scss';

import { Divider } from './Divider';
import { Item } from './Item';
import { MenuSubMenu } from './Menu.SubMenu';
import { ConfigItem, Props } from './Menu.types';

export function UiMenu({
  className,
  subMenuClassName,
  size,
  variant = 'normal',
  config,
  emptyContent,
  onSelect,
}: Props): ReactNode {
  const renderConfigItem = useCallback(
    ({ id: key, ...item }: ConfigItem) => {
      switch (true) {
        case 'divider' in item: {
          return <Divider key={key} variant={variant} />;
        }
        case 'menuTitle' in item: {
          return (
            <div key={key} className={styles.title}>
              {item.content}
            </div>
          );
        }
        case 'config' in item: {
          const {
            config: childConfig,
            emptyContent: childEmptyContent,
            menuClassName,
            popupClassName,
            rightIcon,
            ...restItem
          } = item;
          const RightIcon = rightIcon ?? RightChevron12Icon;
          return (
            <MenuSubMenu
              key={key}
              config={childConfig}
              emptyContent={childEmptyContent ?? emptyContent}
              menuClassName={clsx(className, menuClassName)}
              popupClassName={clsx(subMenuClassName, popupClassName)}
              onSelect={onSelect}
              size={size}
              variant={variant}
            >
              <Item
                id={key}
                size={size}
                view={variant}
                rightIcon={RightIcon}
                stopPropagation
                preventDefault
                {...restItem}
              />
            </MenuSubMenu>
          );
        }
        default: {
          return (
            <Item key={key} id={key} size={size} view={variant} onSelect={onSelect} {...item} />
          );
        }
      }
    },
    [className, emptyContent, onSelect, size, subMenuClassName, variant],
  );

  const rootClassName = clsx(styles.root, styles[variant], className);

  if (config.length === 0) {
    return (
      <div className={rootClassName}>
        <div className={styles.emptyContent}>{emptyContent ?? 'Empty list'}</div>
      </div>
    );
  }

  return <div className={rootClassName}>{config.map(renderConfigItem)}</div>;
}
