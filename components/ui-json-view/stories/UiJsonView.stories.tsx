import { FC } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { UiJsonView } from '~';

import { container, height as heightVar, width as widthVar } from './style.css';

export default {
  title: 'ui-json-view',

  argTypes: {
    isVirtual: {
      name: 'Is virtual?',
      type: 'boolean',
    },
    isInteractive: {
      name: 'Is interactive?',
      type: 'boolean',
    },
    limit: {
      name: 'Limit number of lines',
      type: 'number',
    },
    showDataTypes: {
      name: 'Show data types?',
      type: 'boolean',
    },
    showObjectSize: {
      name: 'Show object size?',
      type: 'boolean',
    },
    isWidthAuto: {
      name: 'Is width auto?',
      type: 'boolean',
    },
    width: {
      name: 'Width',
      type: 'number',
      if: {
        arg: 'isWidthAuto',
        truthy: false,
      },
    },
    isHeightAuto: {
      name: 'Is height auto?',
      type: 'boolean',
    },
    height: {
      name: 'Height',
      type: 'number',
      if: {
        arg: 'isHeightAuto',
        truthy: false,
      },
    },
  },

  args: {
    isWidthAuto: false,
    isHeightAuto: false,
    width: 500,
    height: 500,
    isVirtual: true,
  },
};

type Props = {
  height?: number;
  isHeightAuto?: boolean;
  isInteractive?: boolean;
  isVirtual?: boolean;
  isWidthAuto?: boolean;
  limit?: number;
  showDataTypes?: boolean;
  showObjectSize?: boolean;
  width?: number;
};

type BaseStoryProps = Props & {
  source?: unknown;
};

const BaseStory: FC<BaseStoryProps> = ({
  height = 0,
  isHeightAuto,
  isWidthAuto,
  width = 0,
  source,
  ...options
}) => {
  const style = assignInlineVars({
    [heightVar]: isHeightAuto ? 'auto' : `${height}px`,
    [widthVar]: isWidthAuto ? 'auto' : `${width}px`,
  });

  return (
    <div className={container} style={style}>
      <UiJsonView {...options} source={source ? JSON.stringify(source) : ''} />
    </div>
  );
};

export const Invalid: FC<Props> = (options) => <BaseStory {...options} />;

export const Boolean: FC<Props> = (options) => <BaseStory {...options} source />;

export const Null: FC<Props> = (options) => <BaseStory {...options} source={null} />;

export const Integer: FC<Props> = (options) => <BaseStory {...options} source={10} />;

export const Float: FC<Props> = (options) => <BaseStory {...options} source={10.1} />;

export const String: FC<Props> = (options) => <BaseStory {...options} source="Hello, world" />;

export const EmptyArray: FC<Props> = (options) => <BaseStory {...options} source={[]} />;

export const HomogeneousArray: FC<Props> = (options) => (
  <BaseStory {...options} source={[1, 2, 3.1]} />
);

export const HeterogeneousArray: FC<Props> = (options) => (
  <BaseStory {...options} source={[1, 10.1, 'Hello, world', true, null]} />
);

export const EmptyObject: FC<Props> = (options) => <BaseStory {...options} source={{}} />;

export const HomogeneousObject: FC<Props> = (options) => (
  <BaseStory {...options} source={{ int: 1, number: 2, float: 3.1 }} />
);

export const HeterogeneousObject: FC<Props> = (options) => (
  <BaseStory
    {...options}
    source={{
      int: 1,
      float: 10.1,
      string: 'Hello, world',
      boolean: true,
      null: null,
    }}
  />
);

export const Complex: FC<Props> = (options) => (
  <BaseStory
    {...options}
    source={{
      number: 11,
      emptyArray: [],
      emptyObject: {},
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
      inside: {
        number: 11,
        emptyArray: [],
        emptyObject: {},
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
        inside: {
          number: 11,
          emptyArray: [],
          emptyObject: {},
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
          inside: {
            number: 11,
            emptyArray: [],
            emptyObject: {},
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
            inside: {
              number: 11,
              emptyArray: [],
              emptyObject: {},
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
            },
          },
        },
      },
    }}
  />
);
