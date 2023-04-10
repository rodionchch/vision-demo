import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import getFolders from './folders';
import tags from './tags';
import {useNavigation} from '@react-navigation/native';

const SmsScreen = () => {
  const {navigate, getState} = useNavigation();
  return (
    <ScrollView>
      <Folders
        title={'Unified Folders'}
        data={getFolders(() => {
          navigate(getState().routeNames[1]);
        })}
      />
      <Tags data={tags} />
    </ScrollView>
  );
};

export default SmsScreen;
