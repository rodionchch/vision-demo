import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {PreferencesContext} from '../../components/App';

const HomeScreen = () => {
  const {navigate} = useNavigation<any>();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        icon="camera"
        onPress={() => {
          navigate('Details');
        }}>
        Go to Details
      </Button>
      <Button onPress={toggleTheme}>ToggleTheme</Button>
    </View>
  );
};

export default HomeScreen;
