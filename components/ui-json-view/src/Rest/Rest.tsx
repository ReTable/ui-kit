import { FC } from 'react';

import { root } from './Rest.css';

import { useOptions } from '../OptionsProvider';

type Props = {
  path: string;
};

export const Rest: FC<Props> = ({ path }) => {
  const { onToggle } = useOptions();

  const handleClick = () => {
    onToggle(path);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <span className={root} onClick={handleClick} role="button" tabIndex={-1}>
      ...
    </span>
  );
};
