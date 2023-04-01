import React, {createContext, useCallback, useMemo, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import {Provider} from 'react-redux';
import {store} from '../store';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isThemeDark, setIsThemeDark] = useState(isDarkMode);

  const theme = isThemeDark
    ? {...CombinedDarkTheme}
    : {...CombinedDefaultTheme};

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <Provider store={store}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={{...theme, version: 3}}>
          <SafeAreaView>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
          </SafeAreaView>

          <NavigationContainer theme={theme}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}
export default App;
