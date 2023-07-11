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

export const useUiTheme = (): typeof uiTheme => useContext(Context);
