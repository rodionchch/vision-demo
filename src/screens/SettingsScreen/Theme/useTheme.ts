import {useContext, useEffect, useMemo, useState} from 'react';

import {PreferencesContext} from 'components/App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SYSTEM = 'system',
  DARK = 'dark',
  LIGHT = 'light';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const {setTheme} = useContext(PreferencesContext);

  useEffect(() => {
    AsyncStorage.getItem('theme').then(theme => {
      if (theme) {
        setCurrentTheme(theme);
      }
    });
  }, []);

  const themes = useMemo(
    () => [
      {
        title: 'System',
        selected: currentTheme === SYSTEM,
        onPress: () => {
          AsyncStorage.setItem('theme', SYSTEM).then(() => {
            setCurrentTheme(SYSTEM);
            setTheme(SYSTEM);
          });
        },
      },
      {
        title: 'Dark',
        selected: currentTheme === DARK,
        onPress: () => {
          AsyncStorage.setItem('theme', DARK).then(() => {
            setCurrentTheme(DARK);
            setTheme(DARK);
          });
        },
      },
      {
        title: 'Light',
        selected: currentTheme === LIGHT,
        onPress: () => {
          AsyncStorage.setItem('theme', 'light').then(() => {
            setCurrentTheme(LIGHT);
            setTheme(LIGHT);
          });
        },
      },
    ],
    [currentTheme, setTheme],
  );

  return [themes];
};

export default useTheme;
