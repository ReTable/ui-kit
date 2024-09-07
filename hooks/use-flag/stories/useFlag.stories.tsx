import { FC } from 'react';

import { useFlag } from '~';

type Props = {
  initialState?: number;
};

const Template: FC<Props> = ({ initialState }) => {
  const { counter, increment, decrement } = useFlag({ initialState });

  return (
    <p>
      <button onClick={decrement} type="button">
        -
      </button>
      {counter}
      <button onClick={increment} type="button">
        +
      </button>
    </p>
  );
};

export default {
  component: Template,
  title: 'use-flag',
};

export const Default: FC = () => <Template />;

export const WithInitialState: FC = () => <Template initialState={42} />;
