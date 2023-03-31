import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate} = useNavigation<any>();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          navigate('Details');
        }}>
        Go to Details
      </Button>
    </View>
  );
};

export default HomeScreen;
