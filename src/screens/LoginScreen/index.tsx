import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import useFaceId from 'hooks/useFaceId';
import sleep from 'utils/sleep';
import CodeDots from 'components/Code/Dots';
import Code from 'components/Code';

import Logo from 'assets/images/logo.png';

const LoginScreen = () => {
  const [onFaceId, faceIdSuccess] = useFaceId();

  const {navigate} = useNavigation<NavigationType>();
  const [savedPIN, setSavedPIN] = useState<string | null>(null);
  const [PIN, setPIN] = useState('');
  const startFaceId = useRef(false);

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
        sleep(500).then(() => {
          navigate('Home');
        });
      } else {
        setPIN('');
      }
    }
  }, [PIN, navigate, savedPIN]);

  useEffect(() => {
    if (typeof onFaceId === 'function' && !startFaceId.current) {
      onFaceId();
      startFaceId.current = true;
    }
  }, [onFaceId]);

  useEffect(() => {
    if (faceIdSuccess) {
      AsyncStorage.getItem('pin').then(pin => {
        setPIN(pin || '');
      });
    }
  }, [faceIdSuccess, navigate]);

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
        <Code
          onFaceId={onFaceId}
          onChange={onChangeCode}
          onBackspace={onBackspace}
        />
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
