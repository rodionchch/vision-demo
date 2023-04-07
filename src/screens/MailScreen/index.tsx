import React, {useRef, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import folders from './folders';
import tags from './tags';
import FAB from 'components/FAB';

const MailScreen = () => {
  const isIOS = Platform.OS === 'ios';
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

  return (
    <>
      <ScrollView onScroll={onScroll}>
        <Folders title={'Unified Folders'} data={folders} />
        <Tags data={tags} />
        <View style={styles.plug} />
      </ScrollView>

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

const styles = StyleSheet.create({
  plug: {
    height: 60,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});

export default MailScreen;
