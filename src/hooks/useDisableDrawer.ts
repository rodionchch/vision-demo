import {useNavigation} from '@react-navigation/native';

const useDisableDrawer = () => {
  const navigation = useNavigation();
  navigation.getParent()?.setOptions({swipeEnabled: false});
};

export default useDisableDrawer;
