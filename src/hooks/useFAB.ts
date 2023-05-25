import {useRef, useState} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {isIOS} from 'constants/Platform';

const useFAB = () => {
  const [extended, setExtended] = useState(true);
  const {current: velocity} = useRef(new Animated.Value(0));

  const onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    if (!isIOS) {
      return velocity.setValue(currentScrollPosition);
    }

    setExtended(currentScrollPosition <= 0);
  };

  return {
    velocity,
    extended,
    onScroll,
  };
};

export default useFAB;
