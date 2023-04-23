import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import List from 'components/List';
import useAbout from './useAbout';

const About = () => {
  const {about} = useAbout();

  return (
    <ScrollView>
      <List data={about} />
    </ScrollView>
  );
};

export default About;
