import {useMemo} from 'react';

const useSettings = () => {
  const settings = useMemo(
    () => [
      {
        title: 'Profile',
        icon: 'account',
      },
      {
        title: 'Security',
        icon: 'security',
      },
      {
        title: 'Theme',
        icon: 'white-balance-sunny',
      },
      {
        title: 'Language',
        icon: 'alpha-a-box-outline',
      },
      {
        title: 'About',
        icon: 'information-outline',
      },
    ],
    [],
  );
  return {settings};
};

export default useSettings;
