import {createContext, useCallback, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

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

const useApp = () => {
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

  return [isDarkMode, theme, preferences];
};

export default useApp;
