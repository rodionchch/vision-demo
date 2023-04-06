import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const useFaceId = () => {
  const [isCompatible, setIsCompatible] = useState(false);
  const [faceIdSuccess, setFaceIdSuccess] = useState(false);

  useEffect(() => {
    LocalAuthentication.hasHardwareAsync().then(compatible => {
      setIsCompatible(compatible);
    });
  }, []);

  const onFaceId = async () => {
    try {
      if (!isCompatible) {
        throw new Error("Your device isn't compatible.");
      }

      //   // Checking if device has biometrics records
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!isEnrolled) {
        throw new Error('No Faces / Fingers found.');
      }

      //   // Authenticate user
      const {success, error, warning} =
        await LocalAuthentication.authenticateAsync({
          promptMessage: 'hello',
        });

      if (success) {
        setFaceIdSuccess(success);
      }
    } catch (error) {
      Alert.alert('An error as occured', error?.message);
    }
  };

  return [onFaceId, faceIdSuccess, isCompatible];
};

export default useFaceId;
