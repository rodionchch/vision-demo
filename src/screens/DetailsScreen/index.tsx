import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = () => {
  const {navigate} = useNavigation<any>();

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Button
        onPress={() => {
          navigate('Home');
        }}>
        Go to Home
      </Button>
    </View>
  );
};

export default DetailsScreen;
