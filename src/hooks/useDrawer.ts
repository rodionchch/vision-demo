import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useDisableDrawer = () => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({swipeEnabled: false});
    }, [navigation]),
  );
};

export const useEnableDrawer = () => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({swipeEnabled: true});
    }, [navigation]),
  );
};
