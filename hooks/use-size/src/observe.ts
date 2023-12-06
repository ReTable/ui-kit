export type Listener = (rect: DOMRect) => void;

// region Listeners

const allListeners = new WeakMap<Element, Listener[]>();

function onResize(entries: ResizeObserverEntry[]) {
  for (const entry of entries) {
    const listeners = allListeners.get(entry.target);

    if (listeners == null) {
      continue;
    }

    for (const listener of listeners) {
      listener(entry.contentRect);
    }
  }
}

// endregion

// region Observer

let observer: ResizeObserver | null = null;

function getObserver(): ResizeObserver {
  if (observer == null) {
    observer = new ResizeObserver(onResize);
  }

  return observer;
}

// endregion

// region Observe

function unobserve(target: Element, listener: Listener) {
  const listeners = allListeners.get(target) ?? [];

  if (listeners.length === 1) {
    getObserver().unobserve(target);

    allListeners.delete(target);

    return;
  }

  const nextListeners = listeners.filter((it) => it === listener);

  allListeners.set(target, nextListeners);
}

export function observe(target: Element, listener: Listener): () => void {
  getObserver().observe(target);

  const listeners = allListeners.get(target) ?? [];

  listeners.push(listener);

  allListeners.set(target, listeners);

  return () => {
    unobserve(target, listener);
  };
}

// endregion
