import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useDisableDrawer = (disable: boolean) => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      if ((disable !== undefined && !!disable) || !disable) {
        navigation.getParent()?.setOptions({swipeEnabled: false});
      }
    }, [navigation, disable]),
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
