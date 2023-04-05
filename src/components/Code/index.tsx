import React from 'react';
import CodeButton from './CodeButton';
import {StyleSheet, View} from 'react-native';

type CodeProps = {
  onChange: (code: number) => void;
  onBackspace: () => void;
};

const Code: React.FC<CodeProps> = ({onChange, onBackspace}) => {
  return (
    <View style={styles.container}>
      <CodeButton icon={'numeric-1'} onPress={() => onChange(1)} />
      <CodeButton icon={'numeric-2'} onPress={() => onChange(2)} />
      <CodeButton icon={'numeric-3'} onPress={() => onChange(3)} />
      <CodeButton icon={'numeric-4'} onPress={() => onChange(4)} />
      <CodeButton icon={'numeric-5'} onPress={() => onChange(5)} />
      <CodeButton icon={'numeric-6'} onPress={() => onChange(6)} />
      <CodeButton icon={'numeric-7'} onPress={() => onChange(7)} />
      <CodeButton icon={'numeric-8'} onPress={() => onChange(8)} />
      <CodeButton icon={'numeric-9'} onPress={() => onChange(9)} />
      <CodeButton
        icon={'face-recognition'}
        size={32}
        iconMargin={{
          marginTop: 18,
          marginLeft: 18,
        }}
      />
      <CodeButton icon={'numeric-0'} onPress={() => onChange(0)} />
      <CodeButton
        icon={'backspace-outline'}
        size={32}
        iconMargin={{
          marginTop: 18,
          marginLeft: 15,
        }}
        onPress={onBackspace}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 284,
    justifyContent: 'space-between',
  },
});

export default Code;
