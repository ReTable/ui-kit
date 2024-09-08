import { ReactNode, useCallback } from 'react';

import clsx from 'clsx';

import { ReactComponent as ChevronIcon } from '../assets/chevron.svg';

import * as shared from '../shared.css';
import * as styles from './UiMenu.css';

import { Divider } from '../Divider';
import { Item, SelectItemHandler } from '../Item';
import { SubMenu } from '../SubMenu';
import { ConfigItem, Size, Variant } from '../types';

export type Props = {
  className?: string;
  subMenuClassName?: string;
  size: Size;
  variant?: Variant;
  config: ConfigItem[];
  emptyContent?: ReactNode;
  onSelect?: SelectItemHandler;
};

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
          return <Divider key={key} />;
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

          const RightIcon = rightIcon ?? ChevronIcon;

          return (
            <SubMenu
              key={key}
              config={childConfig}
              emptyContent={childEmptyContent ?? emptyContent}
              menuClassName={clsx(className, menuClassName)}
              popupClassName={clsx(subMenuClassName, popupClassName)}
              onSelect={onSelect}
              size={size}
              variant={variant}
            >
              <Item id={key} rightIcon={RightIcon} stopPropagation preventDefault {...restItem} />
            </SubMenu>
          );
        }
        default: {
          return <Item key={key} id={key} onSelect={onSelect} {...item} />;
        }
      }
    },
    [className, emptyContent, onSelect, size, subMenuClassName, variant],
  );

  const rootClassName = clsx(styles.root, shared.variants[variant], shared.sizes[size], className);

  if (config.length === 0) {
    return (
      <div className={rootClassName}>
        <div className={styles.emptyContent}>{emptyContent ?? 'Empty list'}</div>
      </div>
    );
  }

  return <div className={rootClassName}>{config.map((it) => renderConfigItem(it))}</div>;
}
