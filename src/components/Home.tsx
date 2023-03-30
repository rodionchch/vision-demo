import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
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
      <Text>{hello}</Text>
    </View>
  );
};

export default Home;
