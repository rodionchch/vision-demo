import {MD3DarkTheme} from 'react-native-paper';

const MyDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    primary: '#81E5C3', // Заголовки, табы
    onPrimary: 'rgb(0, 55, 55)',
    primaryContainer: '#81E5C3', // Fab
    onPrimaryContainer: '#181D20', // Fab Label
    secondary: 'rgb(176, 204, 203)',
    onSecondary: 'rgb(27, 53, 52)',
    secondaryContainer: '#81E5C3', // Активный Nav - Дата в чате
    onSecondaryContainer: '#181D20', // Активная иконка
    tertiary: 'rgb(179, 200, 232)',
    onTertiary: 'rgb(28, 49, 75)',
    tertiaryContainer: 'rgb(51, 72, 99)',
    onTertiaryContainer: 'rgb(211, 228, 255)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(15, 18, 18)', // Фон
    onBackground: 'rgb(224, 227, 226)',
    surface: 'rgb(15, 18, 18)', // AppBar
    onSurface: 'rgb(224, 227, 226)', // Иконки, текст
    surfaceVariant: 'rgb(63, 73, 72)', // Круглые кнопочки
    onSurfaceVariant: 'rgb(190, 201, 200)', // Иконки, subtitle
    outline: 'rgb(136, 147, 146)', // Рамка инпута
    outlineVariant: 'rgb(63, 73, 72)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(224, 227, 226)',
    inverseOnSurface: 'rgb(45, 49, 49)',
    inversePrimary: 'rgb(0, 106, 106)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(24, 38, 38)',
      level2: '#181D20', // NavBar
      level3: 'rgb(22, 49, 49)',
      level4: 'rgb(22, 51, 51)',
      level5: 'rgb(22, 55, 55)',
    },
    surfaceDisabled: 'rgba(224, 227, 226, 0.12)',
    onSurfaceDisabled: 'rgba(224, 227, 226, 0.38)',
    backdrop: 'rgba(41, 50, 50, 0.4)',
    card: '#181D20', // Drawer
  },
};

export default MyDarkTheme;
