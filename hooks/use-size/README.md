# @tabula/use-size

The `useSize` hook allows to track size of an element through the `ResizeObserver`.

That hook is written with a few technical decisions:

- a single `ResizeObserver` instance used for better performance;
- the `requestAnimationFrame` used for throttling resize callbacks;
- the hook doesn't support SSR;
- `ResizeObserver` polyfill doesn't used.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/use-size`.

```bash
pnpm add @tabula/use-size
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

The default usage is looks like:

```tsx
import { useSize } from '@tabula/use-size';

const Watcher: FC = () => {
  const [ref, size] = useSize();

  return <div ref={ref} />;
};
```

## Defaults

The initial value of size will be `{ height: 0, width: 0 }`.

```tsx
const [, size] = useSize();

// size => { height: 0, width: 0 }
```

But you can provide your default value:

```tsx
const [, size] = useSize({ height: 150, width: 450 });

// size => { height: 150, width: 450 }
```

That value is actual while have no any element which mounted and transferred to the hook with `ref`.

## Initial element's size

Each time, when a new element is provided through the `ref`, we update it's size.

```tsx
const [ref, size] = useSize();

// size => { height: 0, width: 0 }

ref(<div style={{ height: 150, width: 450 }} />);

// size => { height: 150, width: 450 }
```

It works each time when element is updated.

```tsx
const [ref, size] = useSize();

// size => { height: 0, width: 0 }

ref(<div key={0} style={{ height: 150, width: 450 }} />);

// size => { height: 150, width: 450 }

ref(<div key={1} style={{ height: 50, width: 150 }} />);

// size => { height: 50, width: 150 }
```

## Resize

Each time when an element is resized, we update it's size in hook.

```tsx
const [ref, size] = useSize();

// size => { height: 0, width: 0 }

ref(<div style={{ height: 150, width: 450 }} />);

// size => { height: 150, width: 450 }

resize({ height: 50, width: 150 });

// size => { height: 50, width: 150 }
```

## Multiple refs

We want to track size of the single element with multiple refs.

```tsx
const [ref1, size1] = useSize();
const [ref2, size2] = useSize();

const ref = combineRefs(ref1, ref2);

// size1 => { height: 0, width: 0 }
// size2 => { height: 0, width: 0 }

ref(<div style={{ height: 150, width: 450 }} />);

// size1 => { height: 150, width: 450 }
// size2 => { height: 150, width: 450 }

resize({ height: 50, width: 150 });

// size1 => { height: 50, width: 150 }
// size2 => { height: 50, width: 150 }
```

## Rounds

We always round size object values.

```tsx
const [ref, size] = useSize();

// size => { height: 0, width: 0 }

ref(<div style={{ height: 150.1, width: 450.9 }} />);

// size => { height: 150, width: 451 }

resize({ height: 50.9, width: 150.1 });

// size => { height: 51, width: 150 }
```

## Re-renders

We try to avoid re-renders. If a new size is equal to previous, we don't trigger re-render.

```tsx
const [ref, size] = useSize();

// size => { height: 0, width: 0 }
// render

ref(<div style={{ height: 150, width: 450 }} />);

// size => { height: 150, width: 450 }
// render

resize({ height: 150, width: 450 });

// size => { height: 150, width: 450 }
// no render

resize({ height: 150.1, width: 450.1 })
// size => { height: 150, width: 450 }
// no render
```

## Target

You can get access to the target element through hook.

```tsx
const [ref, size, target] = useSize();

// target => null

ref(<div id="target-1" />);

// target => <div id="target-1" />

ref(<div id="target-2" />);

// target => <div id="target-2" />

ref(null);

// target => null
```

## Inspired By

This package is inspired by:

- [react-hook/useSize](https://github.com/jaredLunde/react-hook/)
- [react-use/useMeasure](https://github.com/streamich/react-use/)

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
