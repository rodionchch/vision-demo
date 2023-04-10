import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useDisableDrawer} from 'hooks/useDrawer';
import List from 'components/List';
import useAbout from './useAbout';

const About = () => {
  const [about] = useAbout();
  // useDisableDrawer();

  return (
    <ScrollView>
      <List data={about} />
    </ScrollView>
  );
};

export default About;
