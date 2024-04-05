import { FC, MouseEventHandler } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ChevronLeft } from './assets/chevronLeft.svg';
import { ReactComponent as ChevronRight } from './assets/chevronRight.svg';

import * as styles from './Navigate.css';

import { Button } from '../Button';

export type Props = {
  className?: string;

  onPrevious: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

export const Navigate: FC<Props> = ({ className, onPrevious, onNext }) => (
  <div className={clsx(styles.root, className)}>
    <Button className={styles.variants.previous} onClick={onPrevious}>
      <ChevronLeft />
    </Button>
    <Button className={styles.variants.next} onClick={onNext}>
      <ChevronRight />
    </Button>
  </div>
);
