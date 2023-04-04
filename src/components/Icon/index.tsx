import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  focused: boolean;
  color: string;
  size: number;
};

type IconProps = {
  name: string;
  disabled?: boolean;
};

export const getIcon = (name: string, props: Props, disabled?: boolean) => (
  <Icon
    name={name}
    focused={props?.focused}
    color={props?.color}
    size={props?.size}
    disabled={disabled}
  />
);

const Icon: React.FC<IconProps & Props> = ({
  name,
  focused,
  color,
  size,
  disabled,
}) => {
  const focusedName = focused ? name : `${name}-outline`;
  return (
    <MaterialCommunityIcons
      name={focusedName}
      style={{opacity: !disabled ? 1 : 0.3}}
      color={color}
      size={size}
    />
  );
};

export default Icon;
