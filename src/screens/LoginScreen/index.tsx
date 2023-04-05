import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Code from 'components/Code';
import {useNavigation} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';
import CodeDots from 'components/Code/Dots';

import Logo from 'assets/images/logo.png';

const LoginScreen = () => {
  const [savedPIN, setSavedPIN] = useState<string | null>(null);

  const [PIN, setPIN] = useState('');
  const {navigate} = useNavigation<NavigationType>();

  useEffect(() => {
    AsyncStorage.setItem('pin', '00000');
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('pin').then(pin => {
      setSavedPIN(pin);
    });
  }, []);

  useEffect(() => {
    if (PIN?.length === 5) {
      if (PIN === savedPIN) {
        navigate('Home');
      } else {
        setPIN('');
      }
    }
  }, [PIN, navigate, savedPIN]);

  const onChangeCode = (number: number) => {
    if (PIN?.length < 5) {
      setPIN(PIN + number);
    }
  };

  const onBackspace = () => {
    setPIN(prevPIN => prevPIN.slice(0, prevPIN.length - 1));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text variant={'titleMedium'} style={styles.text}>
          Please enter your PIN
        </Text>
        <CodeDots length={PIN?.length} style={styles.dots} />
        <Code onChange={onChangeCode} onBackspace={onBackspace} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 86,
    height: 90,
    marginTop: 40,
    marginBottom: 80,
  },
  text: {
    marginBottom: 30,
  },
  dots: {
    marginBottom: 60,
  },
  container: {
    alignItems: 'center',
  },
});

export default LoginScreen;
