import { FC, MouseEventHandler } from 'react';

import { ReactComponent as ChevronDown } from './assets/chevronDown.svg';

import { icon, root } from './UiExpand.css';

import { UiButton } from '../UiButton';

export type Props = {
  isExpanded: boolean;

  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const UiExpand: FC<Props> = ({ isExpanded, onClick }) => (
  <UiButton className={root} onClick={onClick}>
    <ChevronDown className={isExpanded ? icon.isExpanded : icon.isCollapsed} />
  </UiButton>
);
