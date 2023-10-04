import { FC } from 'react';

import { root } from './UiRest.css';

import { useOptions } from './UiOptions';

type Props = {
  path: string;
};

export const UiRest: FC<Props> = ({ path }) => {
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
