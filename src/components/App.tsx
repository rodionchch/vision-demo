import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {store} from '../store';

import Home from './Home';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = isDarkMode ? {...MD3DarkTheme} : {...MD3LightTheme};

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Home />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}
export default App;
