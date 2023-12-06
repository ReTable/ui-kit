export type Listener = (rect: DOMRect) => void;

// region Listeners

const allListeners = new WeakMap<Element, Listener[]>();

let isTicking = false;

const queue = new Map<Element, DOMRect>();

function flushQueue() {
  for (const [target, rect] of queue.entries()) {
    const listeners = allListeners.get(target);

    if (listeners == null) {
      continue;
    }

    for (const listener of listeners) {
      listener(rect);
    }
  }

  queue.clear();

  isTicking = false;
}

function onResize(entries: ResizeObserverEntry[]) {
  for (const entry of entries) {
    queue.set(entry.target, entry.contentRect);
  }

  if (!isTicking) {
    requestAnimationFrame(flushQueue);
  }

  isTicking = true;
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
