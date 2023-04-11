import {useState} from 'react';
import {Alert} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const useFaceId = () => {
  const [faceIdSuccess, setFaceIdSuccess] = useState(false);

  const onFaceId = async () => {
    try {
      const isCompatible = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (isCompatible && isEnrolled) {
        const {success, error, warning} =
          await LocalAuthentication.authenticateAsync({});

        console.log('Face ID: ', success, error, warning);

        if (success) {
          setFaceIdSuccess(success);
        }
      }
    } catch (error) {
      Alert.alert('An error as occured', error?.message);
    }
  };

  return [onFaceId, faceIdSuccess];
};

export default useFaceId;
