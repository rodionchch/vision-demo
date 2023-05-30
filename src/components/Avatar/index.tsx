import React from 'react';

import * as s from './styled';

type AvatarProps = {
  label?: string;
};

const Avatar: React.FC<AvatarProps> = ({label}) => {
  return <s.AvatarText label={label} />;
};

export default Avatar;
