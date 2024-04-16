import { describe, expect, it } from 'vitest';

import { depth } from '~';

import { createBuilder, toPipeline, verifyPipeline } from './helpers';

describe('depth', () => {
  it("doesn't traverse at all if tree is empty", () => {
    const actual = [...depth([])];

    expect(actual).toEqual([]);
  });

  it('traverse list', () => {
    const [map, node] = createBuilder();

    // prettier-ignore
    const tree = [
      node(1),
      node(2, []),
      node(3),
      node(4, [])
    ];

    const pipeline = toPipeline(
      [
        [1, 0, []],
        [2, 0, []],
        [3, 0, []],
        [4, 0, []],
      ],
      map,
    );

    verifyPipeline([...depth(tree)], pipeline);
  });

  it('traverse tree', () => {
    const [map, node] = createBuilder();

    // prettier-ignore
    const tree = [
      node(1),
      node(2, [
        node(3),
        node(4, [
          node(5),
          node(6, [
            node(7),
            node(8)
          ]),
          node(9)]
        )
      ]),
      node(10),
      node(11, [
        node(12),
        node(13),
        node(14, [
          node(15),
          node(16)
        ])
      ]),
    ];

    const pipeline = toPipeline(
      [
        [1, 0, []],
        [2, 0, []],
        [3, 1, [2]],
        [4, 1, [2]],
        [5, 2, [2, 4]],
        [6, 2, [2, 4]],
        [7, 3, [2, 4, 6]],
        [8, 3, [2, 4, 6]],
        [9, 2, [2, 4]],
        [10, 0, []],
        [11, 0, []],
        [12, 1, [11]],
        [13, 1, [11]],
        [14, 1, [11]],
        [15, 2, [11, 14]],
        [16, 2, [11, 14]],
      ],
      map,
    );

    verifyPipeline([...depth(tree)], pipeline);
  });
});
