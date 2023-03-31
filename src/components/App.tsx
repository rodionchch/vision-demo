import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from '../store';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();
const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = isDarkMode ? {...MD3DarkTheme} : {...MD3LightTheme};

  return (
    <Provider store={store}>
      <PaperProvider theme={{...theme, version: 3}}>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        </SafeAreaView>

        <NavigationContainer theme={LightTheme}>
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
    </Provider>
  );
}
export default App;
