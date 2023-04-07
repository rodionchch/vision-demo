import React from 'react';
import {View} from 'react-native';

import {useDisableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import {about} from '../settingsData';

const About = () => {
  useDisableDrawer();

  return (
    <View>
      <List data={about} />
    </View>
  );
};

export default About;
