import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import styles from './Button.module.css';

import imageUrl, { ReactComponent as Image } from './assets/js.svg';
import { ReactComponent as Shared } from './assets/shared.svg';

type Props = PropsWithChildren<{
  onClick: MouseEventHandler;
}>;

export const Button: FC<Props> = ({ children, onClick }: Props) => (
  <button className={styles.root} onClick={onClick} type="button">
    <img src={imageUrl} />
    <Image />
    <span className={styles.label}>
      <Shared />
      {children}
    </span>
  </button>
);
