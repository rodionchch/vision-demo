import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import List from 'components/List';
import useProfile from './useProfile';

const Profile = () => {
  const {profile} = useProfile();

  return (
    <ScrollView>
      <List data={profile} />
    </ScrollView>
  );
};

export default Profile;
