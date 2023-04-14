import {useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
} from 'react-native';

const useMailRoot = () => {
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

  return [onScroll, tabsAll, tabs, velocity, extended];
};

export default useMailRoot;
