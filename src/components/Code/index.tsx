import React from 'react';
import CodeButton from './CodeButton';

import * as s from './styles';

type CodeProps = {
  onFaceId: boolean | (() => Promise<void>);
  onChange: (code: number) => void;
  onBackspace: () => void;
};

const Code: React.FC<CodeProps> = ({onFaceId, onChange, onBackspace}) => {
  return (
    <s.Code>
      <CodeButton icon={'numeric-1'} onPress={() => onChange(1)} />
      <CodeButton icon={'numeric-2'} onPress={() => onChange(2)} />
      <CodeButton icon={'numeric-3'} onPress={() => onChange(3)} />
      <CodeButton icon={'numeric-4'} onPress={() => onChange(4)} />
      <CodeButton icon={'numeric-5'} onPress={() => onChange(5)} />
      <CodeButton icon={'numeric-6'} onPress={() => onChange(6)} />
      <CodeButton icon={'numeric-7'} onPress={() => onChange(7)} />
      <CodeButton icon={'numeric-8'} onPress={() => onChange(8)} />
      <CodeButton icon={'numeric-9'} onPress={() => onChange(9)} />
      <CodeButton icon={'face-recognition'} onPress={onFaceId} isActionButton />
      <CodeButton icon={'numeric-0'} onPress={() => onChange(0)} />
      <CodeButton
        icon={'backspace-outline'}
        onPress={onBackspace}
        isActionButton={'backspace'}
      />
    </s.Code>
  );
};

export default Code;
