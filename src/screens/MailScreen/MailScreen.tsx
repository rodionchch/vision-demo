import React, {useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
} from 'react-native';

import Folders from 'components/Folders';
import Tags from 'components/Tags';
import FAB from 'components/FAB';
import folders from './folders';
import tags from './tags';

import * as s from './styles';

const MailScreen = () => {
  const isIOS = Platform.OS === 'ios';
  const [extended, setExtended] = useState(true);
  const {current: velocity} = useRef(new Animated.Value(0));

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

  const onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    if (!isIOS) {
      return velocity.setValue(currentScrollPosition);
    }

    setExtended(currentScrollPosition <= 0);
  };

  return (
    <>
      <s.MailScreen onScroll={onScroll}>
        <Folders
          title={'Unified Folders'}
          data={folders}
          screen="Mail"
          tabs={tabsAll}
        />
        <Tags data={tags} tabs={tabs} />
        <s.MailScreenPlug />
      </s.MailScreen>

      <FAB
        visible={true}
        animatedValue={velocity}
        extended={extended}
        label={'New Message'}
        animateFrom={'right'}
        iconMode={'static'}
      />
    </>
  );
};

export default MailScreen;
