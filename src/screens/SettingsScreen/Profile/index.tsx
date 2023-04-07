import React from 'react';
import {View} from 'react-native';

import {useDisableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import {profile} from '../settingsData';

const Profile = () => {
  useDisableDrawer();

  return (
    <View>
      <List data={profile} />
    </View>
  );
};

export default Profile;
