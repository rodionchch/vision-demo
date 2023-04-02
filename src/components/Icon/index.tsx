import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  name: string;
  color?: string;
  size?: number;
};

export const getIcon = (name: string, color?: string, size?: number) => (
  <Icon name={name} color={color} size={size} />
);

const Icon: React.FC<IconProps> = ({name, color, size}) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
};

export default Icon;
