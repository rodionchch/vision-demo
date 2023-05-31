import React from 'react';
import * as s from './styles';

type MessengerInputProps = {
  value: string;
  onChange: (text: string) => void;
  onSend: () => void;
};

const MessengerInput: React.FC<MessengerInputProps> = ({
  value,
  onChange,
  onSend,
}) => {
  return (
    <s.MessengerInput>
      <s.MessengerTextInput
        value={value}
        onChangeText={text => {
          onChange(text);
        }}
        placeholder={'Message'}
      />
      <s.MessengerSend onPress={onSend} />
    </s.MessengerInput>
  );
};

export default MessengerInput;
