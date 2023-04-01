import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {PreferencesContext} from '../../components/App';

const SmsScreen = () => {
  const {navigate} = useNavigation<any>();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  return (
    <View>
      <Button onPress={toggleTheme}>Toggle Theme</Button>
    </View>
  );
};

export default SmsScreen;
