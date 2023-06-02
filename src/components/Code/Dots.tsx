import React from 'react';

import * as s from './styles';
import {useTheme} from 'react-native-paper';

type CodeDotsProps = {
  length: number;
};

const CodeDots: React.FC<CodeDotsProps> = ({length}) => {
  const theme = useTheme();

  return (
    <s.CodeDots>
      <s.CodeDotsDot filled={length >= 1} theme={theme} />
      <s.CodeDotsDot filled={length >= 2} theme={theme} />
      <s.CodeDotsDot filled={length >= 3} theme={theme} />
      <s.CodeDotsDot filled={length >= 4} theme={theme} />
      <s.CodeDotsDot filled={length >= 5} theme={theme} />
    </s.CodeDots>
  );
};

export default CodeDots;
