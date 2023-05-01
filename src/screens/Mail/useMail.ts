import {useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
} from 'react-native';

const useMail = () => {
  const isIOS = Platform.OS === 'ios';
  const [extended, setExtended] = useState(true);
  const {current: velocity} = useRef(new Animated.Value(0));

  const tabsAll = [
    {key: '0', title: 'All Inbox'},
    {key: '1', title: 'All Unread'},
    {key: '2', title: 'All Sent'},
    {key: '3', title: 'All Favorites'},
    {key: '4', title: 'All Trash'},
  ];
  const tabs = [
    {key: '0', title: 'Inbox'},
    {key: '1', title: 'Unread'},
    {key: '2', title: 'Sent'},
    {key: '3', title: 'Favorites'},
    {key: '4', title: 'Trash'},
  ];

  const onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    if (!isIOS) {
      return velocity.setValue(currentScrollPosition);
    }

    setExtended(currentScrollPosition <= 0);
  };

  return {onScroll, tabsAll, tabs, velocity, extended};
};

export default useMail;
