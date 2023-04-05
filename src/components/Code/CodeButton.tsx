import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton, MD3Colors} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type CodeButtonProps = {
  icon: string;
  size?: number;
  iconMargin?: {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
  };
  defaultSize?: number;
  onPress?: () => void;
};

const getIcon =
  ({icon, size: iconSize, defaultSize, iconMargin}: CodeButtonProps) =>
  () =>
    (
      <MaterialCommunityIcons
        name={icon}
        color={MD3Colors.tertiary99}
        size={iconSize || defaultSize}
        style={{...styles.icon, ...iconMargin}}
      />
    );

const CodeButton: React.FC<CodeButtonProps> = ({
  icon,
  size: iconSize,
  iconMargin,
  onPress,
}) => {
  const defaultSize = 60;
  return (
    <IconButton
      icon={getIcon({icon, size: iconSize, defaultSize, iconMargin})}
      size={defaultSize}
      mode={'contained'}
      onPress={onPress}
      style={styles.button}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: -9,
    marginLeft: -9,
  },
});

export default CodeButton;
