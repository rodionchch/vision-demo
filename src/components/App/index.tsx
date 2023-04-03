import React, {createContext} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from 'store';
import {Theme} from '@react-navigation/native';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';

import useApp from './useApp';
import Drawer from '../Drawer';

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

function App(): JSX.Element {
  const [isThemeDark, theme, preferences] = useApp();

  return (
    <Provider store={store}>
      <PreferencesContext.Provider
        value={preferences as {toggleTheme: () => void; isThemeDark: boolean}}>
        <PaperProvider theme={theme as ThemeProp}>
          <StatusBar
            barStyle={isThemeDark ? 'light-content' : 'dark-content'}
          />
          <Drawer theme={theme as Theme} />
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}
export default App;
