function getRoot(id: string): HTMLDivElement | null {
  return document.body.querySelector(`#${id}`);
}

function createRoot(id: string): HTMLDivElement {
  const root = document.createElement('div');

  root.id = id;

  document.body.append(root);

  return root;
}

type Options = {
  className?: string;
  id: string;
};

export function portalRootFor({ className, id }: Options): HTMLDivElement {
  const root = getRoot(id) ?? createRoot(id);

  if (className != null) {
    root.className = className;
  }

  return root;
}
