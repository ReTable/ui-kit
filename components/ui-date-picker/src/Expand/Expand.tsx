import { FC, MouseEventHandler } from 'react';

import { ReactComponent as ChevronDown } from './assets/chevronDown.svg';

import * as styles from './Expand.css';

import { Button } from '../Button';

export type Props = {
  isExpanded: boolean;

  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Expand: FC<Props> = ({ isExpanded, onClick }) => (
  <Button className={styles.root} onClick={onClick}>
    <ChevronDown className={isExpanded ? styles.icon.isExpanded : styles.icon.isCollapsed} />
  </Button>
);
