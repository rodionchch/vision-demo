import React, {useEffect, useState} from 'react';
import {Animated, Platform, StyleProp, ViewStyle} from 'react-native';

import * as s from './styles';

type FABProps = {
  animatedValue: Animated.Value;
  visible: boolean;
  extended: boolean;
  label: string;
  animateFrom: 'left' | 'right';
  iconMode?: 'static' | 'dynamic';
  style?: StyleProp<ViewStyle>;
};

const FAB = ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
}: FABProps) => {
  const [isExtended, setIsExtended] = useState(true);

  const isIOS = Platform.OS === 'ios';

  useEffect(() => {
    if (!isIOS) {
      animatedValue.addListener(({value}: {value: number}) => {
        setIsExtended(value <= 0);
      });
    } else {
      setIsExtended(extended);
    }
  }, [animatedValue, extended, isIOS]);

  const fabStyle = {[animateFrom]: 16};

  return (
    <s.FAB
      icon={'plus'}
      label={label}
      extended={isExtended}
      onPress={() => console.log('Pressed')}
      visible={visible}
      animateFrom={animateFrom}
      iconMode={iconMode}
      style={[style, fabStyle]}
    />
  );
};

export default FAB;
