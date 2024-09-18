import { useCallback, useMemo, useState } from 'react';

import { ToolbarItem } from '~';

import { EditIcon } from '../Chat.EditIcon';
import { SettingsIcon } from '../Chat.SettingsIcon';

type Result = {
  showSettings: boolean;

  onCloseSettings: () => void;

  toolbarItems: ToolbarItem[];
};

export function useControls(onStartNewChat?: () => void): Result {
  const [showSettings, setShowSettings] = useState(false);

  const handleCloseSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  const toolbarItems = useMemo(() => {
    const items: ToolbarItem[] = [];

    if (onStartNewChat != null) {
      items.push(
        {
          id: 'new-chat',

          type: 'action',

          icon: EditIcon,
          label: 'Start new chat',

          onAction: onStartNewChat,
        },
        {
          id: 'divider',

          type: 'divider',
        },
      );
    }

    items.push({
      id: 'settings',

      type: 'toggle',

      icon: SettingsIcon,
      label: 'Settings',

      onToggle: setShowSettings,

      value: showSettings,
    });

    return items;
  }, [onStartNewChat, showSettings]);

  return { showSettings, toolbarItems, onCloseSettings: handleCloseSettings };
}
