import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {sayHello} from '../store/appSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const {hello} = useAppSelector(({app}) => app);

  useEffect(() => {
    dispatch(sayHello());
  }, [dispatch]);

  return (
    <View>
      <Button onPress={() => {}}>{hello}</Button>
    </View>
  );
};

export default Home;
