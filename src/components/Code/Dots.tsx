import React from 'react';
import {StyleProp, StyleSheet, View} from 'react-native';
import {MD3Colors} from 'react-native-paper';

type CodeDotsProps = {
  length: number;
  style: StyleProp<any>;
};

const CodeDots: React.FC<CodeDotsProps> = ({length, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <View
        style={{
          ...styles.dot,
          backgroundColor:
            length >= 1 ? MD3Colors.tertiary99 : MD3Colors.neutralVariant50,
        }}
      />
      <View
        style={{
          ...styles.dot,
          backgroundColor:
            length >= 2 ? MD3Colors.tertiary99 : MD3Colors.neutralVariant50,
        }}
      />
      <View
        style={{
          ...styles.dot,
          backgroundColor:
            length >= 3 ? MD3Colors.tertiary99 : MD3Colors.neutralVariant50,
        }}
      />
      <View
        style={{
          ...styles.dot,
          backgroundColor:
            length >= 4 ? MD3Colors.tertiary99 : MD3Colors.neutralVariant50,
        }}
      />
      <View
        style={{
          ...styles.dot,
          backgroundColor:
            length >= 5 ? MD3Colors.tertiary99 : MD3Colors.neutralVariant50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 115,
    justifyContent: 'space-between',
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
});

export default CodeDots;
