import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';

import { variants } from './Checkbox.css';

type Variant = keyof typeof variants;

type Props = PropsWithChildren<{
  isChecked: boolean;
  isIndeterminate: boolean;

  variant: Variant;

  onChange: (isChecked: boolean) => void;

  style?: CSSProperties;

  testId?: string;
}>;

export function Checkbox({
  children,
  isChecked,
  isIndeterminate,
  onChange,
  style,
  testId,
  variant,
}: Props): ReactNode {
  return (
    <UiCheckbox
      className={variants[variant]}
      isChecked={isChecked}
      isIndeterminate={isIndeterminate}
      onChange={onChange}
      style={style}
      testId={testId}
    >
      {children}
    </UiCheckbox>
  );
}
