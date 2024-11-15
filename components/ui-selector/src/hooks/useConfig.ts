import { useMemo } from 'react';

import * as styles from '../skeleton.css';

import { Config, ConfigItem } from '../Selector.types';

type Options = {
  outerConfig: Config;
  defaultItem?: ConfigItem;
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
      return outerConfig.reduce((acc: Config, item) => {
        if ('divider' in item || 'menuTitle' in item) {
          acc.push(item);
          return acc;
        }

        if (item.denyFilter || isMatch(item.id) || isMatch(String(item.content))) {
          acc.push(item);
        }

        return acc;
      }, []);
    }

    if (defaultItem != null) {
      return [defaultItem, { id: 'default-item-divider', divider: true }, ...outerConfig];
    }

    return outerConfig;
  }, [loading, showSearchField, searchValue, defaultItem, outerConfig, isMatch]);
}
