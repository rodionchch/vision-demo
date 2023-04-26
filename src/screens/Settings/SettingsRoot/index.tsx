import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {useToggleDrawer} from 'hooks/useDrawer';
import List, {ListDataItemType} from 'components/List';
import useSettingsRoot from './useSettingsRoot';
import NavigationType from 'types/NavigationType';

const SettingsRoot = () => {
  const {navigate} = useNavigation<NavigationType>();
  const {settings} = useSettingsRoot();
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

export default SettingsRoot;
