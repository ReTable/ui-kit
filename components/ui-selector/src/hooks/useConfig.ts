import { useMemo } from 'react';

import { StaticGraphUtils } from 'src/constants/graph';

import styles from '../Selector.module.scss';

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
    className: styles.skeleton,
    contentClassName: styles.content,
  },
  {
    id: 'loading-2',
    content: '',
    className: styles.skeleton,
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

        if (
          !item.denyFilter &&
          !StaticGraphUtils.startsWith(item.id, searchValue) &&
          !StaticGraphUtils.startsWith(String(item.content), searchValue)
        ) {
          return acc;
        }

        acc.push(item);
        return acc;
      }, []);
    }

    if (defaultItem != null) {
      return [defaultItem, { id: 'default-item-divider', divider: true }, ...outerConfig];
    }

    return outerConfig;
  }, [loading, showSearchField, searchValue, defaultItem, outerConfig]);
}
