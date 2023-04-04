import React, {useState} from 'react';
import {AnimatedFAB} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import Folders from 'components/Folders';
import Tags from 'components/Tags';
import folders from './folders';
import tags from './tags';

const MailScreen = () => {
  const [isExtended, setIsExtended] = useState(true);

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const animateFrom = 'right';
  const visible = true;

  const fabStyle = {[animateFrom]: 16};

  return (
    <>
      <ScrollView onScroll={onScroll}>
        <Folders title={'Unified Folders'} data={folders} />
        <Tags data={tags} />
        <View style={styles.plug} />
      </ScrollView>

      <AnimatedFAB
        icon={'plus'}
        label={'Compose'}
        extended={isExtended}
        onPress={() => console.log('Pressed')}
        visible={visible}
        animateFrom={'right'}
        iconMode={'dynamic'}
        style={[styles.fabStyle, fabStyle]}
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
