import React, {createContext} from 'react';
import {StatusBar} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from 'store';
import useApp from './useApp';
import Drawer from '../Drawer';
import Navigation from '../Navigation';

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

function App(): JSX.Element {
  const [isDarkMode, theme, preferences] = useApp();

  return (
    <Provider store={store}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {/* <Drawer theme={theme} /> */}
          <Navigation theme={theme} />
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}
export default App;
