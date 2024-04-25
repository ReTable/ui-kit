import { PropsWithChildren, ReactNode } from 'react';

import { Context } from './Context';

export type Props = PropsWithChildren<{
  /**
   * The parent track id which will be brought down to children components.
   */
  trackId?: string | null;
}>;

export function UiAnalytics({ children, trackId }: Props): ReactNode {
  return <Context.Provider value={trackId ?? null}>{children}</Context.Provider>;
}

if (import.meta.env.DEV) {
  UiAnalytics.displayName = 'ui-analytics(UiAnalytics)';
}
