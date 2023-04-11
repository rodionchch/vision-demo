import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import folders from './folders';
import tags from './tags';

const SmsScreen = () => {
  const tabsAll = [
    {key: '0', title: 'Conversations'},
    {key: '1', title: 'All Unread'},
    {key: '2', title: 'All Favorites'},
    {key: '3', title: 'All Trash'},
  ];
  const tabs = [
    {key: '0', title: 'Conversations'},
    {key: '1', title: 'Unread'},
    {key: '2', title: 'Favorites'},
    {key: '3', title: 'Trash'},
  ];

  return (
    <ScrollView>
      <Folders
        title={'Unified Folders'}
        data={folders}
        screen="Sms"
        tabs={tabsAll}
      />
      <Tags data={tags} tabs={tabs} />
    </ScrollView>
  );
};

export default SmsScreen;
