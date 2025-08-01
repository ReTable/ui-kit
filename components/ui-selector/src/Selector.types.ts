import { PropsWithChildren, ReactNode } from 'react';

import { OffsetOptions } from '@floating-ui/react';

import { UiMenuDivider, UiMenuItem, UiMenuTitle } from '@tabula/ui-menu';

export enum VisibleKind {
  Outside,
  Trigger,
  Select,
}

// ----- Handler types

export type ChangeVisibleHandler = (visibility: boolean, kind: VisibleKind) => void;
export type TriggerRenderer = () => ReactNode;

// ----- Option types

export type Item = UiMenuItem & {
  denyFilter?: boolean;
  searchKeys?: string[];
};
export type Divider = UiMenuDivider;
export type Title = UiMenuTitle;
export type DefaultItem = UiMenuItem;

export type ConfigItem = Item | Divider | Title;
export type Config = ConfigItem[];

// ----- Item getter types

export type OptionItem<T> = T | Divider | Title;

type ItemConfigGetterOptions<T> = {
  item: T;
  options: Array<OptionItem<T>>;
  isTrigger?: boolean;
};
export type ItemConfigGetter<T> = (options: ItemConfigGetterOptions<T>) => Item | null;

// ----- Component types

export type Props = PropsWithChildren<{
  config: Config;
  defaultItem?: DefaultItem;
  emptyContent?: ReactNode;
  isInvalid?: boolean;
  isVisible?: boolean;
  isWarning?: boolean;
  loading?: boolean;
  offset?: OffsetOptions;
  onChangeVisible?: ChangeVisibleHandler;
  onRenderTrigger?: TriggerRenderer;
  placeholder?: string;
  readOnly?: boolean;
  searchClassName?: string;
  showSearchClear?: boolean;
  showSearchField?: boolean;
  triggerClassName?: string;
  triggerContainerClassName?: string;
}>;

export { type OffsetOptions as Offset } from '@floating-ui/react';
