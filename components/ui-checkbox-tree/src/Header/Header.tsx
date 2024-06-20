import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { UiCheckbox } from '@tabula/ui-checkbox';

import * as styles from './Header.css';

import { useHeaderState } from '../Context';

type Props = {
  className?: string;

  testId?: string;
};

export function Header({ className, testId }: Props): ReactNode {
  const { isChecked, isDisabled, isIndeterminate, onChange } = useHeaderState();

  return (
    <UiCheckbox
      className={clsx(styles.root, className)}
      isDisabled={isDisabled}
      isChecked={isChecked}
      isIndeterminate={isIndeterminate}
      onChange={onChange}
      testId={testId}
    >
      Select all
    </UiCheckbox>
  );
}
