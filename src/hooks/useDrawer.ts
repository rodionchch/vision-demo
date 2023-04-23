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

export const useToggleDrawer = () => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      const parentParent = parent?.getParent();
      const type = 'drawer';
      if (parent?.getState().type === type) {
        parent.setOptions({swipeEnabled: true});
      } else if (parentParent?.getState()?.type === type) {
        parentParent.setOptions({swipeEnabled: true});
      }

      return () => {
        navigation.getParent()?.setOptions({swipeEnabled: false});
      };
    }, [navigation]),
  );
};
