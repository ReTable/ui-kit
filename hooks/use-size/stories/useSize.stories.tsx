import { FC } from 'react';

import { useSize } from '~';

type Props = {
  initialState?: number;
};

const Template: FC<Props> = ({ initialState }) => {
  const { counter, increment, decrement } = useSize({ initialState });

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
  title: 'use-size',
};

export const Default: FC = () => <Template />;

export const WithInitialState: FC = () => <Template initialState={42} />;
