import {useCallback} from 'react';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import NavigationType from 'types/NavigationType';

const useBack = () => {
  const {reset} = useNavigation<NavigationType>();
  const route = useRoute();

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (
            route.name === 'Settings' ||
            route.name === 'PhoneBook' ||
            route.name === 'MailBook'
          ) {
            reset({
              index: 0,
              routes: [{name: 'Dashboard'}],
            });
          }
          return true;
        },
      );
      return () => backHandler.remove();
    }, [reset, route.name]),
  );
};

export default useBack;
