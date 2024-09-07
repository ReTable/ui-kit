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
};
export type Divider = UiMenuDivider;
export type Title = UiMenuTitle;

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
  emptyContent?: ReactNode;
  triggerClassName?: string;
  triggerContainerClassName?: string;
  searchClassName?: string;
  config: Config;
  defaultItem?: ConfigItem;
  placeholder?: string;
  showSearchField?: boolean;
  showSearchClear?: boolean;
  offset?: OffsetOptions;
  loading?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  warning?: boolean;
  isVisible?: boolean;
  onChangeVisible?: ChangeVisibleHandler;
  onRenderTrigger?: TriggerRenderer;
}>;

export { type OffsetOptions as Offset } from '@floating-ui/react';
