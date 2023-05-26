import React, {useEffect, useState} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {isIOS} from 'constants/Platform';

import * as s from './styles';

type FABProps = {
  nav?: boolean;
  animatedValue: Animated.Value;
  visible: boolean;
  extended: boolean;
  label: string;
  animateFrom: 'left' | 'right';
  iconMode?: 'static' | 'dynamic';
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const FAB = ({
  nav,
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
  onPress,
}: FABProps) => {
  const [isExtended, setIsExtended] = useState(true);

  useEffect(() => {
    if (!isIOS) {
      animatedValue.addListener(({value}: {value: number}) => {
        setIsExtended(value <= 0);
      });
    } else {
      setIsExtended(extended);
    }
  }, [animatedValue, extended]);

  const fabStyle = {[animateFrom]: 16};

  return (
    <s.FAB
      nav={nav}
      icon={'plus'}
      label={label}
      extended={isExtended}
      onPress={onPress}
      visible={visible}
      animateFrom={animateFrom}
      iconMode={iconMode}
      style={[style, fabStyle]}
    />
  );
};

export default FAB;
