import React, {useState} from 'react';
import TextInputMask, {TextInputMaskProps} from 'react-native-text-input-mask';

import * as s from './styles';

type EditProps = {};

const Edit: React.FC<EditProps> = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  return (
    <s.Edit>
      <s.EditInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <s.EditInput
        label="Phone Number"
        value={number}
        onChangeText={text => setNumber(text)}
        keyboardType={'phone-pad'}
        onBlur={() => {
          if (number === '+') {
            setNumber('');
          }
        }}
        render={(props: TextInputMaskProps) => (
          <TextInputMask {...props} mask="+[000] [00] [000] [0000]" />
        )}
      />
    </s.Edit>
  );
};

export default Edit;
