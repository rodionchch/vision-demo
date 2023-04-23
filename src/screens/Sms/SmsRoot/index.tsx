import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {useToggleDrawer} from 'hooks/useDrawer';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import useSmsRoot from './useSmsRoot';

import folders from '../folders';
import tags from './tags';

import * as s from '../styles';

const SmsRoot = () => {
  const {tabsAll, tabs} = useSmsRoot();
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
      <s.SmsPlug />
    </ScrollView>
  );
};

export default SmsRoot;
