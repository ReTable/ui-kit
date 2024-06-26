import { describe, expect, it } from 'vitest';

import { breadth, depth } from '~';

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
        { id: 1, level: 0, parentIds: [] },
        { id: 2, level: 0, parentIds: [] },
        { id: 3, level: 0, parentIds: [] },
        { id: 4, level: 0, parentIds: [] },
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
        { id: 1, level: 0, parentIds: [] },
        { id: 2, level: 0, parentIds: [] },
        { id: 3, level: 1, parentIds: [2] },
        { id: 4, level: 1, parentIds: [2] },
        { id: 5, level: 2, parentIds: [2, 4] },
        { id: 6, level: 2, parentIds: [2, 4] },
        { id: 7, level: 3, parentIds: [2, 4, 6] },
        { id: 8, level: 3, parentIds: [2, 4, 6] },
        { id: 9, level: 2, parentIds: [2, 4] },
        { id: 10, level: 0, parentIds: [] },
        { id: 11, level: 0, parentIds: [] },
        { id: 12, level: 1, parentIds: [11] },
        { id: 13, level: 1, parentIds: [11] },
        { id: 14, level: 1, parentIds: [11] },
        { id: 15, level: 2, parentIds: [11, 14] },
        { id: 16, level: 2, parentIds: [11, 14] },
      ],
      map,
    );

    verifyPipeline([...depth(tree)], pipeline);
  });

  it('allows filter elements', () => {
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
        { id: 1, level: 0, parentIds: [] },
        { id: 2, level: 0, parentIds: [] },
        { id: 3, level: 1, parentIds: [2] },
        { id: 4, level: 1, parentIds: [2] },
        { id: 5, level: 2, parentIds: [2, 4] },
        { id: 6, level: 2, parentIds: [2, 4] },
        { id: 9, level: 2, parentIds: [2, 4] },
        { id: 10, level: 0, parentIds: [] },
      ],
      map,
    );

    const actual = [
      ...depth(tree, {
        filter: (item) => item.level < 3 && item.node.id !== 11,
      }),
    ];

    verifyPipeline(actual, pipeline);
  });

  describe('subtree', () => {
    it("doesn't traverse at all if subtree not existed", () => {
      const [, node] = createBuilder();

      // prettier-ignore
      const tree = [
        node(1),
        node(2, []),
        node(3),
        node(4, [])
      ];

      expect([...breadth(tree, { subTree: 5 })]).toEqual([]);
    });

    it('traverse only subtree leaf', () => {
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
          {
            id: 9,
            level: 2,
            parentIds: [2, 4],
          },
        ],
        map,
      );

      verifyPipeline([...depth(tree, { subTree: 9 })], pipeline);
    });

    it('traverse only subtree branch', () => {
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
          { id: 4, level: 1, parentIds: [2] },
          { id: 5, level: 2, parentIds: [2, 4] },
          { id: 6, level: 2, parentIds: [2, 4] },
          { id: 7, level: 3, parentIds: [2, 4, 6] },
          { id: 8, level: 3, parentIds: [2, 4, 6] },
          { id: 9, level: 2, parentIds: [2, 4] },
        ],
        map,
      );

      verifyPipeline([...depth(tree, { subTree: 4 })], pipeline);
    });

    it('allows filter elements inside the subtree', () => {
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
          { id: 4, level: 1, parentIds: [2] },
          { id: 5, level: 2, parentIds: [2, 4] },
          { id: 6, level: 2, parentIds: [2, 4] },
        ],
        map,
      );

      verifyPipeline(
        [
          ...depth(tree, {
            filter(item) {
              return item.level < 3 && item.node.id !== 9;
            },

            subTree: 4,
          }),
        ],
        pipeline,
      );
    });
  });
});
