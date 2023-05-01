import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {useToggleDrawer} from 'hooks/useDrawer';
import List, {ListDataItemType} from 'components/List';
import useSettings from './useSettings';
import NavigationType from 'types/NavigationType';

const Settings = () => {
  const {navigate} = useNavigation<NavigationType>();
  const {settings} = useSettings();
  useToggleDrawer();

  return (
    <ScrollView>
      <List
        data={settings}
        onPress={({title}: ListDataItemType) => {
          navigate(title);
        }}
      />
    </ScrollView>
  );
};

export default Settings;
