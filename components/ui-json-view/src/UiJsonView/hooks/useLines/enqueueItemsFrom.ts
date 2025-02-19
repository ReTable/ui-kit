import { isPrimitiveValue } from './isPrimitiveValue';
import {
  closeItemFrom,
  emptyItemFrom,
  openItemFrom,
  valueItemFrom,
  valueLineItemFrom,
} from './itemFrom';
import { metaOf } from './metaOf';
import { Item, ValueItem } from './types';

export function enqueueItemsFrom(parent: ValueItem): void {
  const { jsonPath, level, path, property, value: source, next } = parent;

  // Step 1: If source value is primitive value, then create line item immediately.
  if (isPrimitiveValue(source)) {
    // Step 1.1: Create an item.
    const item = valueLineItemFrom(source, {
      jsonPath,
      path,
      level,
      property,
    });

    // Step 1.2: If parent is presented, then redirect references.
    item.next = next;

    parent.next = item;

    return;
  }

  // Step 2: Get a unified children of source value, because it can be an array or an object.
  const { children, openSymbol, closeSymbol, size, type } = metaOf(source);

  // Step 3: Create an open item.
  const open = openItemFrom({
    jsonPath,
    level,
    path,

    property,

    openSymbol,
    closeSymbol,

    size,
    type,
  });

  // Step 4: Create a close item.
  const close = closeItemFrom({
    level,
    path,

    closeSymbol,

    size,
  });

  // Step 5: Redirect references.
  close.next = next;

  parent.next = open;

  // Step 6: Make an open item an initial cursor value.
  let cursor: Item = open;

  if (size === 0) {
    // Step 7.1: Create an empty item if source value has no children.
    const empty = emptyItemFrom({ path, level });

    // Step 7.2: Redirect references.
    empty.next = close;

    cursor.next = empty;
  } else {
    // Step 8.1: Iterate over children and convert them to items.
    for (const [index, childProperty, value] of children) {
      // Step 8.1.1: Create an item.
      const item = valueItemFrom({
        jsonPath,
        level,
        path,

        index,
        property: childProperty,

        value,
      });

      // Step 8.1.2: Redirect references.
      cursor.next = item;

      cursor = item;
    }

    // Step 8.2: Make close as next item after last child item.
    cursor.next = close;
  }
}
