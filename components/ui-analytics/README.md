# @tabula/ui-analytics

Allows to provide tracking ids to components.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-analytics`.

```bash
pnpm add @tabula/ui-analytics
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

### `UiAnalytics`

This component provides `trackId` property through context to the children component.

```typescript jsx
import { UiAnalytics } from "@tabula/ui-analytics";

// ...
<UiAnalytics trackId="awesome-id">
  {/* ... */}
</UiAnalytics>
// ...
```

### `useUiTrackId`

This hook extract track id from context.

```typescript jsx
import { useUiTrackId } from "@tabula/ui-analytics";

// ...
const trackId = useUiTrackId();
// ...

// ...
<button data-track-id={trackId}>Click me!</button>
// ...
```

If `trackId` is not provided through context or nullable, then hook returns `null` too.

### `useUiTrackIds`

This hook extract track id from context and build ids map.

```typescript jsx
import { useUiTrackId } from "@tabula/ui-analytics";

// ...
const trackIds = useUiTrackIds({
  add: 'add-button',
  remove: 'remove-button',
});
// ...

// ...
<button data-track-id={trackIds.add}>Add</button>
<button data-track-id={trackIds.remove}>Remove</button>
// ...
```

It generates each id in following way from example above when track id is `list`:

```html
<button data-track-id="list--add-button">Add</button>
<button data-track-id="list--remove-button">Remove</button>
```

If `trackId` is not provided through context or nullable, then hook returns `null` for
all keys.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
