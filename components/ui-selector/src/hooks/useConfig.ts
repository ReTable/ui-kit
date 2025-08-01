import { useMemo } from 'react';

import * as styles from '../skeleton.css';

import { Config, DefaultItem } from '../Selector.types';

type Options = {
  outerConfig: Config;
  defaultItem?: DefaultItem;
  searchValue: string;
  showSearchField?: boolean;
  loading?: boolean;
};

const LOADING_CONFIG: Config = [
  {
    id: 'loading-1',
    content: '',
    className: styles.root,
    contentClassName: styles.content,
  },
  {
    id: 'loading-2',
    content: '',
    className: styles.root,
    contentClassName: styles.content,
  },
];

export function useConfig({
  outerConfig,
  defaultItem,
  searchValue,
  showSearchField,
  loading,
}: Options): Config {
  const isMatch = useMemo(() => {
    const pattern = searchValue.trim().toLowerCase();

    return (target: string) => target.trim().toLowerCase().includes(pattern);
  }, [searchValue]);

  return useMemo(() => {
    if (loading) {
      return LOADING_CONFIG;
    }

    if (showSearchField && searchValue !== '') {
      return outerConfig
        .reduce((acc: Config, item) => {
          if ('divider' in item || 'menuTitle' in item) {
            return acc;
          }

          const { denyFilter, searchKeys, ...restItem } = item;
          if (denyFilter || searchKeys?.some((key) => isMatch(key)) || isMatch(item.id)) {
            acc.push(restItem);
          }

          return acc;
        }, [])
        .sort((left, right) => left.id.localeCompare(right.id));
    }

    const menuConfig: Config = outerConfig.map((item) => {
      if ('divider' in item || 'menuTitle' in item) {
        return item;
      }

      const { denyFilter, searchKeys, ...restItem } = item;
      return restItem;
    });

    if (defaultItem != null) {
      menuConfig.unshift(defaultItem, { id: 'default-item-divider', divider: true });
    }

    return menuConfig;
  }, [loading, showSearchField, searchValue, defaultItem, outerConfig, isMatch]);
}
