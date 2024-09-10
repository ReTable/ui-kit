import { ReactNode } from 'react';

import { ItemConfigGetter, UiSelector, useSyncSelector } from '@tabula/ui-selector';

import { Mode } from '../types';

const itemConfigGetter: ItemConfigGetter<Mode> = ({ item: { id, name: content } }) => ({
  id,
  content,
});

type Props = {
  className?: string;
  onChange: (mode: Mode) => void;
  options: Mode[];
  value: Mode;
};

export function ModeSelector({ className, onChange, options, value }: Props): ReactNode {
  const { config, triggerRenderer } = useSyncSelector({
    itemConfigGetter,
    onChange,
    options,
    value,
  });

  return (
    <UiSelector
      config={config}
      onRenderTrigger={triggerRenderer}
      placeholder="Select chat mode"
      triggerContainerClassName={className}
    />
  );
}

if (import.meta.env.DEV) {
  ModeSelector.displayName = 'UiAiChat(ModeSelector)';
}
