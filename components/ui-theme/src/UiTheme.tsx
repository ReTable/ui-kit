import { FC, PropsWithChildren, createContext, useContext } from 'react';

import { layers } from './layers.css';
import { vars } from './theme.css';

const uiTheme = {
  layers,
  vars,
};

const Context = createContext(uiTheme);

export const UiTheme: FC<PropsWithChildren> = ({ children }) => (
  <Context.Provider value={uiTheme}>{children}</Context.Provider>
);

if (import.meta.env.DEV) {
  UiTheme.displayName = 'ui-theme(UiTheme)';
}

export const useUiTheme = (): typeof uiTheme => useContext(Context);
