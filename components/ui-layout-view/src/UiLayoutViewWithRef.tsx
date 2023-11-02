import { forwardRef } from 'react';

import { UiLayoutView } from './UiLayoutView';
import { Props } from './UiLayoutView.types';

export const UiLayoutViewWithRef = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => (
    <UiLayoutView {...props} forwardedRef={ref}>
      {children}
    </UiLayoutView>
  ),
);

UiLayoutViewWithRef.displayName = 'UiLayoutView(WithRef)';
