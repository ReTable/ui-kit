import { FC } from 'react';

import { UiJsonView } from '~';

export default {
  title: 'ui-json-view',
};

export const Boolean: FC = () => <UiJsonView source={JSON.stringify(true)} />;

export const Null: FC = () => <UiJsonView source={JSON.stringify(null)} />;

export const Integer: FC = () => <UiJsonView source={JSON.stringify(10)} />;

export const Float: FC = () => <UiJsonView source={JSON.stringify(10.1)} />;

export const String: FC = () => <UiJsonView source={JSON.stringify('Hello, world')} />;

export const EmptyArray: FC = () => <UiJsonView source={JSON.stringify([])} />;

export const HomogeneousArray: FC = () => <UiJsonView source={JSON.stringify([1, 2, 3.1])} />;

export const HeterogeneousArray: FC = () => (
  <UiJsonView source={JSON.stringify([1, 10.1, 'Hello, world', true, null])} />
);

export const EmptyObject: FC = () => <UiJsonView source={JSON.stringify({})} />;

export const HomogeneousObject: FC = () => (
  <UiJsonView source={JSON.stringify({ int: 1, number: 2, float: 3.1 })} />
);

export const HeterogeneousObject: FC = () => (
  <UiJsonView
    source={JSON.stringify({
      int: 1,
      float: 10.1,
      string: 'Hello, world',
      boolean: true,
      null: null,
    })}
  />
);

export const Complex: FC = () => (
  <UiJsonView
    source={JSON.stringify({
      number: 11,
      object: {
        array: [
          10,
          {
            string: 'Hello, world',
          },
        ],
      },
      array: [
        {
          number: 11.1,
          array: [true, false],
        },
      ],
    })}
  />
);
