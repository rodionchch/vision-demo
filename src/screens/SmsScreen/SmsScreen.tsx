import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import folders from './folders';
import tags from './tags';

const SmsScreen = () => {
  return (
    <ScrollView>
      <Folders title={'Unified Folders'} data={folders} screen="Sms" />
      <Tags data={tags} />
    </ScrollView>
  );
};

export default SmsScreen;
