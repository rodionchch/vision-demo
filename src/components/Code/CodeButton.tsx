import React from 'react';

import * as s from './styles';

type CodeButtonProps = {
  icon: string;
  isActionButton?: boolean | 'backspace';
  defaultSize?: number;
  onPress?: boolean | (() => Promise<void>) | (() => void);
};

const getIcon =
  ({icon, isActionButton, defaultSize}: CodeButtonProps) =>
  () =>
    (
      <s.CodeButtonIcon
        name={icon}
        isActionButton={isActionButton}
        size={isActionButton ? 32 : defaultSize}
      />
    );

const CodeButton: React.FC<CodeButtonProps> = ({
  icon,
  isActionButton,
  onPress,
}) => {
  const defaultSize = 60;
  return (
    <s.CodeButton
      icon={getIcon({icon, isActionButton, defaultSize})}
      size={defaultSize}
      mode={'contained'}
      onPress={() => typeof onPress === 'function' && onPress?.()}
    />
  );
};

export default CodeButton;
