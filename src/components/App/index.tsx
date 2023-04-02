import React, {createContext} from 'react';
import {StatusBar} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from 'store';
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
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <StatusBar
            barStyle={isThemeDark ? 'light-content' : 'dark-content'}
          />
          <Drawer theme={theme} />
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}
export default App;
