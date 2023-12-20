import { FC, MouseEventHandler } from 'react';

import { ReactComponent as ChevronDown } from './assets/chevronDown.svg';

import * as styles from './UiExpand.css';

import { UiButton } from '../UiButton';

export type Props = {
  isExpanded: boolean;

  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const UiExpand: FC<Props> = ({ isExpanded, onClick }) => (
  <UiButton className={styles.root} onClick={onClick}>
    <ChevronDown className={isExpanded ? styles.icon.isExpanded : styles.icon.isCollapsed} />
  </UiButton>
);

UiExpand.displayName = `ui-date-picker(UiExpand)`;
