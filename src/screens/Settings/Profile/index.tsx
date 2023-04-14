import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useDisableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import useProfile from './useProfile';

const Profile = () => {
  // useDisableDrawer();
  const {profile} = useProfile();

  return (
    <ScrollView>
      <List data={profile} />
    </ScrollView>
  );
};

export default Profile;
