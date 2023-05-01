import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useToggleDrawer} from 'hooks/useDrawer';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import useSms from './useSms';

import folders from './folders';
import tags from './tags';

const Sms = () => {
  const {tabsAll, tabs} = useSms();
  useToggleDrawer();

  return (
    <ScrollView>
      <Folders
        title={'Unified Folders'}
        data={folders}
        screen="Sms"
        tabs={tabsAll}
      />
      <Tags data={tags} tabs={tabs} screen="Sms" />
    </ScrollView>
  );
};

export default Sms;
