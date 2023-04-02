import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  focused: boolean;
  color: string;
  size: number;
};

type IconProps = {
  name: string;
};

export const getIcon = (name: string, props: Props) => (
  <Icon
    name={name}
    focused={props?.focused}
    color={props?.color}
    size={props?.size}
  />
);

const Icon: React.FC<IconProps & Props> = ({name, focused, color, size}) => {
  const focusedName = focused ? name : `${name}-outline`;
  return (
    <MaterialCommunityIcons name={focusedName} color={color} size={size} />
  );
};

export default Icon;
