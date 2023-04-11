import {useNavigation} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';

const useSettingsRoot = () => {
  const {navigate} = useNavigation<NavigationType>();

  const settings = [
    {
      title: 'Profile',
      icon: 'account',
      onPress: () => {
        navigate('Profile');
      },
    },
    {
      title: 'Security',
      icon: 'security',
      onPress: () => {
        navigate('Security');
      },
    },
    {
      title: 'Theme',
      icon: 'white-balance-sunny',
      onPress: () => {
        navigate('Theme');
      },
    },
    {
      title: 'Language',
      icon: 'alpha-a-box-outline',
      onPress: () => {
        navigate('Language');
      },
    },
    {
      title: 'About',
      icon: 'information-outline',
      onPress: () => {
        navigate('About');
      },
    },
  ];
  return [settings];
};

export default useSettingsRoot;
