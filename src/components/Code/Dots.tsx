import React from 'react';

import * as s from './styles';

type CodeDotsProps = {
  length: number;
};

const CodeDots: React.FC<CodeDotsProps> = ({length}) => {
  return (
    <s.CodeDots>
      <s.CodeDotsDot filled={length >= 1} />
      <s.CodeDotsDot filled={length >= 2} />
      <s.CodeDotsDot filled={length >= 3} />
      <s.CodeDotsDot filled={length >= 4} />
      <s.CodeDotsDot filled={length >= 5} />
    </s.CodeDots>
  );
};

export default CodeDots;
