import { FC, MouseEventHandler } from 'react';

import clsx from 'clsx';

import { ReactComponent as ChevronLeft } from './assets/chevronLeft.svg';
import { ReactComponent as ChevronRight } from './assets/chevronRight.svg';

import * as styles from './UiNavigate.css';

import { UiButton } from '../UiButton';

export type Props = {
  className?: string;

  onPrevious: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

export const UiNavigate: FC<Props> = ({ className, onPrevious, onNext }) => (
  <div className={clsx(styles.root, className)}>
    <UiButton className={styles.variants.previous} onClick={onPrevious}>
      <ChevronLeft />
    </UiButton>
    <UiButton className={styles.variants.next} onClick={onNext}>
      <ChevronRight />
    </UiButton>
  </div>
);

UiNavigate.displayName = `ui-date-picker(UiNavigate)`;
