import {useContext, useEffect, useMemo, useState} from 'react';

import {PreferencesContext} from 'components/App';
import AsyncStorage from '@react-native-async-storage/async-storage';

enum ThemeEnum {
  SYSTEM = 'system',
  DARK = 'dark',
  LIGHT = 'light',
}

const useTheme = () => {
  const [checked, setChecked] = useState<ThemeEnum>(ThemeEnum.DARK);
  const {setTheme} = useContext(PreferencesContext);

  useEffect(() => {
    AsyncStorage.getItem('theme').then(theme => {
      if (theme) {
        setChecked(theme as ThemeEnum);
      }
    });
  }, []);

  const themes = useMemo(
    () => [
      {
        label: 'System',
        checked: checked === ThemeEnum.SYSTEM,
        onPress: () => {
          AsyncStorage.setItem('theme', ThemeEnum.SYSTEM).then(() => {
            setChecked(ThemeEnum.SYSTEM);
            setTheme(ThemeEnum.SYSTEM);
          });
        },
      },
      {
        label: 'Dark',
        checked: checked === ThemeEnum.DARK,
        onPress: () => {
          AsyncStorage.setItem('theme', ThemeEnum.DARK).then(() => {
            setChecked(ThemeEnum.DARK);
            setTheme(ThemeEnum.DARK);
          });
        },
      },
      {
        label: 'Light',
        checked: checked === ThemeEnum.LIGHT,
        onPress: () => {
          AsyncStorage.setItem('theme', 'light').then(() => {
            setChecked(ThemeEnum.LIGHT);
            setTheme(ThemeEnum.LIGHT);
          });
        },
      },
    ],
    [setTheme, checked],
  );

  return [themes];
};

export default useTheme;
