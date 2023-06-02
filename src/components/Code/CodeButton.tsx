import React from 'react';

import * as s from './styles';
import {useTheme} from 'react-native-paper';

type CodeButtonProps = {
  icon: string;
  isActionButton?: boolean | 'backspace';
  defaultSize?: number;
  onPress?: boolean | (() => Promise<void>) | (() => void);
};

const getIcon =
  ({
    icon,
    isActionButton,
    defaultSize,
    color,
  }: CodeButtonProps & {color: string}) =>
  () =>
    (
      <s.CodeButtonIcon
        name={icon}
        color={color}
        isActionButton={isActionButton}
        size={isActionButton ? 32 : defaultSize}
      />
    );

const CodeButton: React.FC<CodeButtonProps> = ({
  icon,
  isActionButton,
  onPress,
}) => {
  const theme = useTheme();
  const defaultSize = 60;
  return (
    <s.CodeButton
      icon={getIcon({
        icon,
        isActionButton,
        defaultSize,
        color: theme?.colors?.onSurface,
      })}
      size={defaultSize}
      mode={'contained'}
      onPress={() => typeof onPress === 'function' && onPress?.()}
    />
  );
};

export default CodeButton;
