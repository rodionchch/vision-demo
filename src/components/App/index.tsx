import React, {createContext} from 'react';
import {StatusBar} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from '../../store';

import Navigation from '../Navigation';
import Drawer from '../Drawer';
import useApp from './useApp';

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
          <Navigation theme={theme} />
          <Drawer />
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}
export default App;
