import React, {createContext} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store} from 'store';
import {Theme} from '@react-navigation/native';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';

import useApp from './useApp';
import Drawer from '../Drawer';

export const PreferencesContext = createContext({
  setTheme: (theme: string | null) => theme,
  toggleTheme: () => {},
  isThemeDark: false,
});

function App(): JSX.Element {
  const {isThemeDark, theme, preferences} = useApp();

  return (
    <Provider store={store}>
      <PreferencesContext.Provider
        value={
          preferences as {
            setTheme: (theme: string | null) => theme;
            toggleTheme: () => void;
            isThemeDark: boolean;
          }
        }>
        <PaperProvider theme={theme as ThemeProp}>
          <StatusBar
            barStyle={isThemeDark ? 'light-content' : 'dark-content'}
          />
          <SafeAreaProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <Drawer theme={theme as Theme} />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}
export default App;
