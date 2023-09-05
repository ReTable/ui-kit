import { FC } from 'react';

import { UiButtonIconComponentProps } from '~';

export const Icon: FC<UiButtonIconComponentProps> = ({ className }) => (
  <svg className={className} data-testid="icon" />
);
