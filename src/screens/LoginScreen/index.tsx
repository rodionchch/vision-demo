import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import useFaceId from 'hooks/useFaceId';
import sleep from 'utils/sleep';
import CodeDots from 'components/Code/Dots';
import Code from 'components/Code';

import * as s from './styles';

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
    <s.Login>
      <s.LoginLogo />
      <s.LoginText variant={'titleMedium'}>Please enter your PIN</s.LoginText>
      <CodeDots length={PIN?.length} />
      <Code
        onFaceId={onFaceId}
        onChange={onChangeCode}
        onBackspace={onBackspace}
      />
    </s.Login>
  );
};

export default LoginScreen;
