import {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';
import merge from 'deepmerge';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {adaptNavigationTheme} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import MyDarkTheme from 'themes/MyDarkTheme';
import MyLightTheme from 'themes/MyLightTheme';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = merge(DarkTheme, MyDarkTheme);
const CombinedLightTheme = merge(LightTheme, MyLightTheme);

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

const useApp = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isThemeDark, setIsThemeDark] = useState(isDarkMode);

  const theme = isThemeDark ? {...CombinedDarkTheme} : {...CombinedLightTheme};

  useEffect(() => {
    AsyncStorage.getItem('theme').then(currentTheme => {
      if (!currentTheme) {
        setIsThemeDark(true);
        AsyncStorage.setItem('theme', 'dark');
      } else {
        if (currentTheme === 'system') {
          setIsThemeDark(isDarkMode);
        } else {
          setIsThemeDark(currentTheme === 'dark');
        }
      }
    });
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const setTheme = useCallback(
    (newTheme: string | null) => {
      if (newTheme) {
        if (newTheme === 'system') {
          setIsThemeDark(isDarkMode);
        } else {
          setIsThemeDark(newTheme === 'dark');
        }
      }
    },
    [isDarkMode],
  );

  useEffect(() => {
    setIsThemeDark(isDarkMode);
  }, [isDarkMode]);

  const preferences = useMemo(
    () => ({
      setTheme,
      toggleTheme,
      isThemeDark,
    }),
    [setTheme, toggleTheme, isThemeDark],
  );

  return {isThemeDark, theme, preferences};
};

export default useApp;
