import React from 'react';

import * as s from './styles';

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
    <s.Icon name={focusedName} disabled={disabled} color={color} size={size} />
  );
};

export default Icon;
